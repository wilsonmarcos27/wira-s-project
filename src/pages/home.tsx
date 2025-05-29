import { Header } from "../components/header"

const Home = () => {
    return(
            <div id="Div pai nao mexer">
                <Header/>

  <div className="flex justify-center bg-blue-500 items-center h-[100vh]">
    <div className="w-full h-full">

    <img src="https://static-cse.canva.com/blob/1173240/screen3.jpg" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="absolute bg-black w-full h-full items-center justify-center flex opacity-50">
<div>

  <h1 className=" text-white text-4xl text-center font-bold">Ola meu primeiro projecto</h1>
  <h1 className=" text-white text-4xl  text-center font-bold">Desce para mais</h1>
</div>
    </div>
  </div>

<div className="flex h-[100vh]">

<main className="w-1/2 bg-black">
<div>

</div>
</main>

<aside className="w-1/2">
<div>
  
</div>
</aside>
</div>

</div>
    )
}
export default Home