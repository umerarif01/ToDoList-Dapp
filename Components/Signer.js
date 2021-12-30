import useBlockchain from "../hooks/use-blockchain";

function Signer() {
    const { authProvider, signer, address, balance } = useBlockchain();

    return (
        <div className="text-lg">
            {signer ? (
                <>
                    <button className="bg-green-400 text-black p-5 rounded-md">
                        Connected 
                        to: {address?.substring(0, 10)}...
                    </button>
                </>
            ) : (
                <button className="bg-yellow-400 text-black p-5 rounded-md" onClick={authProvider}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
}

export default Signer;

 {/* <p className="balance">Balance: {balance} ETH</p> */}