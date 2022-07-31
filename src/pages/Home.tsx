import { BrandButton } from "../components/Button"
export const Home = () => {   
     
    return (
        <div style={{boxSizing: "border-box"}}>
            <div style={{ height: "5rem", width: "23.4rem", backgroundColor: "#000", color: "#fff" }}>Header (desktop: height: "5rem", width: "100rem")
            </div>
            
            <div style={{ height: "38.94rem", width: "23.4rem", backgroundColor: "#fff", color: "#000" }}>
                Nav-Menu (desktop: height: "31.43rem", width: "100rem")
            </div>
            
            <div style={{ height: "33.75rem",  width: "23.4rem", backgroundColor: "#000", color: "#fff"}}>
                <p style={{ height: "1.875rem", width: "23.4rem",  backgroundColor: "#260b92", color: "#fff"}}>Leilão</p>
                
                <div style={{ display: "flex" }}>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        
                        <div style={{ height: "27.18rem", width: "20.5rem", backgroundColor: "#a50e0e", color: "#fff", marginRight: "0.5rem", marginLeft: "0.75rem" }}>carro1</div>
                        {/*<BrandButton size="lg">bora ver</BrandButton>*/}
                        <div style={{ height: "3.8rem", width: "20.5rem", backgroundColor: "#e61abd", color: "#fff", marginRight: "0.5rem", marginLeft: "0.75rem" }}>button1</div>
                        
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        
                        <div style={{ height: "27.18rem", width: "1.68rem", backgroundColor: "#049d41", color: "#000" }}>
                            carro2 (IGNORAR)
                        </div>
                        <div style={{ height: "3.8rem", width: "1.68rem", backgroundColor: "#e61abd", color: "#fff"}}>button2</div>
                        
                    </div>                    
                        
                </div>
                
            </div>
            
            <div>
                    <p>carros</p>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <p>motos</p>
                    <div></div>
                </div>
        </div>
    )
}