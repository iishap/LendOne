const { LensClient, production } = require("@lens-protocol/client");

const LENS_Factor = 0.7;

const lensClient = new LensClient({
    environment: production
});

const getLensValuation = async (lensHandle) => {
    
    let valuation = 20;

    const isFollowedByReputableLensContributor = await checkFollowByReputableLensContributor(lensHandle);

    if(isFollowedByReputableLensContributor){
        valuation += 100;
    }

    const lensValuation = LENS_Factor * valuation;

    return lensValuation;
};

const checkFollowByReputableLensContributor = async(lens) => {
    const lensHandle = lens.split('.')[0];
    const lensClient = new LensClient({
        environment: production
    });

    // const reputableLensContributor = 'lens/nandy' // set to nandy for the demo when protocol will be live set to sani, nader ...
    
    const reputableLensContributor = 'lens/nader';
    const userHandel = `lens/${lensHandle}`;

    const profileByHandle = await lensClient.profile.fetch({
        // forHandle: "lens/lilgho",
        forHandle: userHandel
    })
    
    console.log(`Profile fetched by handle: `, {
        id: profileByHandle.id,
        handle: profileByHandle.handle,
    })
    

    console.log({ userHandel, reputableLensContributor })

    let isFollowedByTheReputableLensContributor = false;

    let followers = [];
    let i = 0;
    let result;
    while (i >= 0 ) {
        if(i===0){
            result = await lensClient.profile.followers({
                of: profileByHandle.id,
            });
        }else{
            result = await result.next();
            if(!result){
                break;
            }
        }

        const newFollowers = result.items.map((p) => {
            if(p.handle === null){
            i = -Infinity;
            return [];
            }
            return p.handle.fullHandle;
        });
        followers = [...followers, ...newFollowers];
        if(newFollowers.includes(reputableLensContributor)){
            isFollowedByTheReputableLensContributor = true;
            break;
        }
        console.log(
            `#${i}`,
            `Followers:`,
            newFollowers
        );
        i++;
    }

    console.log({isFollowedByTheReputableLensContributor})

    console.log({
        followers: followers.sort(),
    })
    
    return isFollowedByTheReputableLensContributor;
}

module.exports = getLensValuation;
