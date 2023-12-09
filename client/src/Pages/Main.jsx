import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ethers } from "ethers";
import ABI from './Abi.js';
import ABI2 from './Abi2.js';

import { bouncy } from "ldrs";

bouncy.register();

const Main = () => {
  const { address, isConnected } = useAccount();
  const [number, setNumber] = useState(0);
  const [popup, setPopup] = useState(false);
  const [borrowed, setBorrowed] = useState(false);

  const [selectedCards, setSelectedCards] = useState([]);
  const [amount, setAmount] = useState(0);
  const uniqueIdentifiers = ["card1", "card2", "card3", "card4"];

  const handleSelectCard = (identifier) => {
    if (selectedCards.includes(identifier)) {
      setSelectedCards(selectedCards.filter((card) => card !== identifier));
    } else {
      setSelectedCards([...selectedCards, identifier]);
    }
  };

  useEffect(() => {
    if (isConnected) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easedValue = easeInOutCubic(progress / 1000) * 80;
        setNumber(Math.min(easedValue, 80));
        if (progress < 1000) {
          window.requestAnimationFrame(step);
        }
      };
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      window.requestAnimationFrame(step);
    } else {
      setNumber(0);
    }
  }, [isConnected]);

  async function borrow() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractAddress = '0x8C6Ed43671734a6D5D3e122894004dCBe1fCe8CE';
    console.log("abi", ABI);
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    try{
      const response = await contract.createLoan(10,1);
      setBorrowed(true)
    }catch (err) {
      console.log("Erreur lors du owner");
    }
  }
  return (
    <div className="flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-950 to-red-900">
      <img src="../banner.png" alt="main" className="scale-[150%] pt-40 mt-80" />
      <div className="absolute top-[30px] right-[20%]">
        <w3m-button
        bgColor="green"
         />
      </div>
      {isConnected ? (
        <>
          <div className="absolute top-[40px] left-[27%] w-[20vw]">
            <ProgressBar
              completed={Math.round(number)}
              customLabel=" "
              bgColor="green"
            />
          </div>
          <div className="absolute top-[36px] left-[57%] w-[20vw]">
            <MaskButton pbk={address} 
            bgColor="green"
            />

          </div>
        </>
      ) : null}
      <div className="absolute h-[60vh] w-[60vw] bg-white/10 backdrop-blur-[4px] border border-gray-200 shadow-lg p-6 rounded-lg flex items-start justify-start space-y-4 divide-y divide-slate-700 flex-col bg-green-600">
        <div className="w-full flex items-center justify-around">
          <div>Assets</div>
          <div>APY</div>
          <div>
            <div className="bg-transparent text-transparent rounded-lg px-4 py-2">
              Deposit
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-around pt-4">
          <div>DAI</div>
          <div>3.2%</div>
          <div>
            <button
              className="bg-red-700 text-white rounded-lg px-4 py-2"
              onClick={() => setPopup(true)}
            >
              Borrow
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-around pt-4">
          <div>ETH</div>
          <div>1.8%</div>
          <div>
            <button
              className="bg-red-700 text-white rounded-lg px-4 py-2"
              onClick={() => setPopup(true)}
            >
              Borrow
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-around pt-4">
          <div>MATIC</div>
          <div>5.2%</div>
          <div>
            <button
              className="bg-red-700 text-white rounded-lg px-4 py-2"
              onClick={() => setPopup(true)}
            >
              Borrow
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-around pt-4">
          <div>USDT</div>
          <div>1.03%</div>
          <div>
            <button
              className="bg-red-700 text-white rounded-lg px-4 py-2"
              onClick={() => setPopup(true)}
            >
              Borrow
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-around pt-4">
          <div>USDC</div>
          <div>0.8%</div>
          <div>
            <button
              className="bg-red-700 text-white rounded-lg px-4 py-2"
              onClick={() => setPopup(true)}
            >
              Borrow
            </button>
          </div>
        </div>
      </div>
      {popup ? (
        <div className="absolute h-screen w-screen bg-white/10 backdrop-blur-[4px] flex items-center justify-center">
          <button
            className="absolute top-[35px] left-[2.5%] w-[15px] h-[15px] flex items-center justify-center bg-white/10 backdrop-blur-[4px] border border-gray-200 shadow-lg p-6 rounded-full font-bold"
            onClick={() => setPopup(false)}
          >
            x
          </button>
          <div className="h-[80vh] w-[30vw] flex items-center justify-center bg-white/50 backdrop-blur-[50px] border border-gray-200 shadow-lg p-6 rounded-lg flex-col space-y-4">
            <div className="h-[5vh] w-full flex items-center justify-center">
              Deposit Your Social Values
            </div>
            <div className="h-[5vh] w-[87%] rounded-lg pl-4 bg-[#ddcdff] flex items-center justify-start">
              <div className="absolute right-[4rem]">DAI</div>
              {amount}
            </div>
            <div className="h-[40vh] border-2 border-gray-300 bg-gray-100 rounded-lg grid grid-cols-3 gap-4 p-4 drop-shadow-md">
              {uniqueIdentifiers.map((identifier) => (
                <Card
                  key={identifier}
                  identifier={identifier}
                  onSelect={handleSelectCard}
                  isSelected={selectedCards.includes(identifier)}
                  myState={amount}
                  setMyState={setAmount}
                />
              ))}
            </div>
            <button className="h-[5vh] w-[87%] bg-[#7b3fe4] text-white rounded-lg px-4 py-2 flex items-center justify-center" onClick={borrow}>
              Borrow
            </button>
          </div>
        </div>
      ) : null}
      {borrowed ? (
        <div className="absolute bottom-[80px] right-[45%] text-[#7b3fe4] font-black text-4xl z-0">
          Borrowed : {amount}
        </div>
      ) : null}
    </div>
  );
};
export default Main;

const Card = ({ identifier, onSelect, isSelected, myState, setMyState }) => {
  async function approve() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const contractAddress = '0xB0d4634025350Dd2A23a06c06B8AC20A1da9fC5c';
      const contract = new ethers.Contract(contractAddress, ABI2, signer);
      const tx = await contract.approve("0x8C6Ed43671734a6D5D3e122894004dCBe1fCe8CE", 2);
      await tx.wait();
      setTransactionHash(tx.hash);
  } catch (error) {
      console.error('Error:', error);
  }
  }
  const handleClick = async () => {
    // await approve();
    onSelect(identifier);
    setMyState(myState+10)
  };
  const [path, setPath] = useState("../ens.jpg");
  useEffect(() => {
    if(identifier === "card1") {setPath("../lens.png")}
    else if(identifier === "card2") {setPath("../polygon.png")}
    else if(identifier === "card3") {setPath("../mask.jpg")}
  }, []);
  return (
    <div
      className={`h-[8rem] w-[6rem] border-2 rounded-lg ${
        isSelected ? "border-black" : ""
      }`}
      onClick={handleClick}
    >
      <img src={path} className="inset-0 object-cover w-full h-full rounded-lg"/>
    </div>
  );
};

const MaskButton = ({ pbk }) => {
  const [inputValue, setInputValue] = useState("");
  const [compressedPub, setCompressedPub] = useState("");
  const [res, setRes] = useState(" ");
  const [showPopup, setShowPopup] = useState(false);
  const [add, setAdd] = useState(false);
  const [signature, setSignature] = useState("");
  const [load, setLoad] = useState(false);
  const [text, setText] = useState("Verify");

  const compressPublicKey = async (publicKey) => {
    const message = "Hello, world!"; // The content doesn't matter.
    const digest = [...new TextEncoder("UTF-8").encode(message)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
    const signature = await ethereum.request({
      method: "personal_sign",
      params: [digest, publicKey],
    });
    const prefixedDigest = ethers.utils.hashMessage(message);
    const uncompressedPub = ethers.utils.recoverPublicKey(
      prefixedDigest,
      signature
    );
    setCompressedPub(ethers.utils.computePublicKey(uncompressedPub, true));
  };
  const Signature = async (message, publicKey) => {
    const digest = [...new TextEncoder("UTF-8").encode(message)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
    const signature = await ethereum.request({
      method: "personal_sign",
      params: [digest, publicKey],
    });
    setSignature(signature);
  };
  useEffect(() => {
    if (res !== " ") {
      Signature(res, pbk);
      console.log("Signature" + signature);
    }
  }, [res]);

  const postToAPI = async () => {
    console.log(inputValue);
    await compressPublicKey(pbk);

    const apiUrl = "https://proof-service.next.id/v1/proof/payload";
    const data = {
      action: "create",
      platform: "twitter",
      identity: inputValue,
      public_key: compressedPub,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setRes(data.post_content.default);
        setShowPopup(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {!showPopup ? (
        <>
          {add ? (
            <div className="absolute left-[-6rem]">
              {text !== "Verified ✔️" ? (
                <>
                  <input
                    className="w-[8vw] rounded-l-lg text-lg "
                    onChange={(event) => {
                      setInputValue(event.target.value);
                    }}
                  />
                  <button
                    className="bg-red-600 text-white text-lg rounded-r-lg px-4"
                    onClick={postToAPI}
                  >
                    Submit
                  </button>
                </>
              ) : (
                <button className="bg-red-600 text-white rounded-lg px-4">
                  @{inputValue}
                </button>
              )}
            </div>
          ) : (
            <button
              className="bg-red-600  text-white rounded-lg px-4 py-2"
              onClick={() => setAdd(true)}
            >
              Add X (twitter)
            </button>
          )}
        </>
      ) : (
        <div className="z-10 absolute top-[-35px] left-[-55rem] h-[99vh] w-[100vw] bg-white/10 backdrop-blur-[4px] flex items-center justify-center">
          <button
            className="absolute top-[35px] left-[2.5%] w-[15px] h-[15px] flex items-center justify-center bg-white/10 backdrop-blur-[4px] border border-gray-200 shadow-lg p-6 rounded-full font-bold"
            onClick={() => setShowPopup(false)}
          >
            x
          </button>
          <div className="h-[80vh] w-[30vw] flex items-center justify-center bg-white/50 backdrop-blur-[50px] border border-gray-200 shadow-lg p-6 rounded-lg flex-col space-y-4">
            <div className="h-[5vh] w-full border-2 border-red-500 flex items-center justify-center">
              Post this Tweet to be verified
            </div>
            <div className="h-[40vh] w-[25vw] break-all border-2 border-red-500 flex items-center justify-start">
              🎭 Verifying my Twitter ID @your_twitter_handle for @NextDotID.
              Sig: {signature} Next.ID YOUR DIGITAL IDENTITIES IN ONE PLACE
            </div>
            <input
              className="h-[5vh] w-full border-2 border-red-500 flex items-center justify-center"
              type="text"
              placeholder="Enter Tweet link"
              onChange={(e) => {}}
            />
            <div className="h-[5vh] w-full border-2 border-red-500 flex items-center justify-center">
              {load ? (
                <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
              ) : (
                <div
                  onClick={() => {
                    setLoad(true);
                    const timer = setTimeout(() => {
                      setLoad(false);
                      setText("Verified ✔️");
                    }, 1000);
                    return () => clearTimeout(timer);
                  }}
                >
                  {text}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};