import Header from './Header'
import Footer from './Footer'
const layout = ({children})=>{

    return (
        <>
        <Header></Header>
            <div>{children}</div>
        <Footer></Footer>
        </>
        
    )
}

export default layout