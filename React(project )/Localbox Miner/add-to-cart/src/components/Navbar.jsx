  const Navbar = ({boolean,setBoolean}) => {
      function handleClick(){
          setBoolean(!boolean)
      }
    
      return (
        <div
          className="shadow-lg"
          style={{
            backgroundColor: "white",
            height: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            position: "fixed",
            top: "0",
          }}
        >
          <div
            style={{
              fontSize: "35px",
              height: "70%",
              width: "50%",
              fontWeight: "bolder",
              fontFamily: "Arial",
            }}
          >
            Elite Threads

          </div>
          <div
            style={{
              width: "40%",
              height: "50px",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%", fontSize: "20px" }}>Home</div>
            <div style={{ width: "15%", fontSize: "20px" }}>About</div>
            <div style={{ width: "15%", fontSize: "20px" }}>Feature</div>
            <div style={{ width: "15%", fontSize: "20px" }}>Contact</div>
            <div>
              <button
                onClick={() => handleClick()}
                className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[white] hover:shadow-lg"
              >
                Show Cart
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Navbar;