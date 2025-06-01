import { Header } from "../components/header"

const Portifolio=() => {
    return(
        <div>
    <Header/>
            <h1 className= "  text-center fonte-bold  ml-5" >
                 <strong>    Meu portifolio   </strong>
            </h1>

<div className="flex color white">

<main className="w-[50vw]  w-[50vw] h-[100vh]">

<div>
    <img src="https://escolabrasileiradegames.com.br/wp2016/wp-content/uploads/2016/04/escola-brasileira-de-games-desenvolvimento-de-apps-ferramentas.jpg" alt="" className="h-full object-cover ml-5" />

</div>

<div className="absolute bg-black w[50vw] h-full items-center justify-center flex opacity-50 ml-5">

</div>

   <div className="text fonte bulb text white ml-5 bg-orange-300 ">
    <h1>THREE D Digital. LDA</h1>
    
    </div>  


    <p className="text white ml-5 bg-orange-300">A Three D Digital é uma empresa dinâmica e inovadora que atua nos setores de tecnologia e serviços digitais. Especializada na criação de websites modernos e responsivos, a empresa oferece soluções personalizadas que atendem às necessidades de cada cliente, desde pequenas empresas até grandes organizações. Além disso, a Thee D Digital comercializa material informático de qualidade, garantindo desempenho e confiabilidade para ambientes domésticos e profissionais. Complementando seu portfólio, a empresa também presta serviços de instalação e manutenção de câmeras de segurança, proporcionando proteção e tranquilidade para residências e negócios. Com uma equipe qualificada e foco em excelência, a Thee D Digital se destaca pelo compromisso com a inovação, segurança e satisfação do cliente. </p>
</main>

<aside>
    
    <div>

        <img src="https://img.freepik.com/fotos-gratis/nenhuma-pessoa-no-call-center-helpdesk-com-varios-monitores-no-escritorio-atendimento-ao-cliente-e-telecomunicacoes-de-suporte-ao-cliente-ninguem-trabalhando-na-assistencia-de-telemarketing-com-contato-de-linha-de-apoio_482257-44008.jpg?semt=ais_items_boosted&w=740" alt="" className="w-[50vw] h-[90vh]" />
    </div>

<div className="">

<dive>

<form className="space-x-4">
<select className="bg-gray-100 px-3 py-2 border border-gray-300 rounded text-gray-500">
    <option value="" >Escolha os produtos</option>

</select>

<select>
    <option value="" >Escolha os servicos</option>

</select>

<button className="text-yellow-800 bg-yellow-500">
    
    pesquisar</button>


</form>

</dive>


<div className="ml-50 hover:" w-10>
<button type="submit" >enviar</button>

</div>

</div>

</aside>

</div>

        </div>
    )
}

export default Portifolio