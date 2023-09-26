import { Container, Page } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Form } from "./style";
import { TagItem } from "../../components/TagItem";
import { Textarea } from "../../components/Textarea";
import imgUpload from "../../Assets/uploadImg.svg"


import imgButtonBack from "../../Assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";



export function EditPlate(){

    const navigation = useNavigate()

    return(
        <Container>
            <Header />
            <Page>
            <div className="buttonBack">
                <img src={imgButtonBack} alt="Imagem de voltar" />
                <ButtonText
                onClick={() => navigation(-1)}
                title={"voltar"}
                 />
            </div> 
            <h1>Editar Prato</h1>

            <Form>
            <div className="selectImg">

                     <p>Imagem do prato</p>

                    <label htmlFor="imgPlate">
    
                    <img src={imgUpload} alt="Imagem de upload " />

                        Selecione imagem

            <       input id="imgPlate" type="file" placeholder="Selecione uma imagem"/>

                </label>
            </div>
                <div className="name">

                    <p>Nome</p>

                    <input id="namePlate" type="text" placeholder="Ex.: Salada Ceasar" />


                <div className="category">

                    <p>Categoria</p>

                     <select  id="event-category">

                    <option value="snack">Refeições</option>

                    <option value="desserts">Sobremesas</option>

                    <option value="drinks">Bebidas</option>
                </select>

                </div>

                </div>


                    <div className="ingredients">

                        <p>Ingredientes</p>

                        <div id="ingredients">

                        <TagItem 
                         isNew
                        placeholder='Adicionar'
                        />

                        <TagItem 
                        placeholder='Adicionar'
                        />

                        </div>


                    <div className="price">

                         <p>Preço</p>

                         <input id="price" type="text" placeholder="R$ 00,00" />

                    </div>
                </div>

                 <div className="description">

                    <p>Descrição</p>

                <Textarea
                placeholder = "Fale brevemente sobre o prato, seus ingredientes e composição"
                 />

                </div>

            <div className="save">
            
             </div>
             </Form>
            <div className="delete">
            <button
            onClick={() => navigation("/")}
            className="buttonDelete"
            >
                Excluir Prato
            </button>
            <Button
            onClick={() => navigation("/")}
            title={"Salvar alterações"}
             />
             </div>

            </Page>

            <Footer />
            
        </Container>
    )

}