import { Container, Page } from "./style.js";
import { Footer } from "../../components/Footer/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import imgButtonBack from "../../Assets/buttonBack.svg"
import imgDishes from "../../Assets/imagem-deliveryfood-prato.png"
import imgButtonLess from "../../Assets/less.svg"     
import imgButtonMore from "../../Assets/more.svg" 
import { Ingredients } from "../../components/Ingredients/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export function Dishes(){
    const [data, setData] = useState({});
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const {isAdmin} = useAuth();
    const navigation = useNavigate();
    const params = useParams();




    useEffect(() =>{
        async function fetchPlate(){
            const response = await api.get(`/plates/${params.plate_id}`)
            setData(response.data)

            const imageUrl =  `${api.defaults.baseURL}/files/${response.data.plates[0].img}`


            setImage(imageUrl)
            setName(response.data.plates[0].name)
            setDescription(response.data.plates[0].description)
            setPrice(response.data.plates[0].price)

        }

        fetchPlate()

    },[params.plate_id])

    return(
        <Container>
            <Header/>
            <div className="buttonBack">
                <img src={imgButtonBack}alt="botão de voltar" />
            <ButtonText 
            onClick={() => navigation(-1)}
            title={"voltar"}
            />
            </div>

{isAdmin === 1 ? 




<Page>
<div className="indexSnack">
    <img  id="snack" src={image} alt="Imagem do prato" />

</div>
<div className="content">
     <h1>{`${name} >` }</h1>
        <p>{`${description}`} </p>

        <div  className="ingredients">
    {data.tags && data.tags.map(tag => 
    <Ingredients
            key={tag.id}
            title={tag.name}
     />
     )}
</div> 

<div id="includs">
    <Button
    onClick={() => navigation("/edit")}
    className = "editDish" 
    title={"Editar prato"}
/>
</div>
</div>
</Page>  : 
<Page>

<div className="indexSnack">
            <img id="snack" src={image} alt="Imagem do prato" />

</div>

<div className="content">
             <h1>{`${name} >` }</h1>
                <p>{`${description}`}</p>
<div  className="ingredients">
    {data.tags && data.tags.map(tag => 
    <Ingredients
            key={tag.id}
            title={tag.name}
     />
     )}
</div> 

        
    <div id="includs">
        <img src={imgButtonLess} alt="botao de diminuir" />
        <h3>01</h3>
        <img src={imgButtonMore} alt="botao de incluir"  />
        <Button 
        onClick={() => navigation(-1)}
        title={`incluir R$ ${price}`}
        />
        
    </div>
    </div>
</Page>
}
            <Footer/>
        </Container>
    )
}