const ENS_Factor = 0.6;

const getENSValuation = (ens) => {
    const ensName = ens.split('.')[0];
    console.log({ensName, ensLength: ensName.length});
    const { ensLength, ensYearLeft } = {
        ensLength: ensName.length,
        ensYearLeft: 7,
    };
    

    let extendPrice = 0;

    switch(ensLength) {
        case 3:
            extendPrice = 640;
            break;
        case 4:
            extendPrice = 160;
            break;
        default:
            extendPrice = 5;
            break;
    }

    const ensValuation = ENS_Factor * ensYearLeft * extendPrice;

    return ensValuation;

}

module.exports = getENSValuation;
