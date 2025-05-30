import { toast } from 'react-toastify'
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

interface DetailProps{
    id:string;
    title:string;
    backdrop_path:string;
    overview:string;
    release_date:string;
    vote_average:number;
   poster_path:string;
   
}

export function Favoritos(){

const [favoritos,setFavoritos] = useState<DetailProps[]>([])

useEffect(()=>{
    const filmesSalvos = localStorage.getItem("@favoritos")
if(filmesSalvos){
    setFavoritos(JSON.parse(filmesSalvos) || [])
    
}
},[])

function removerFavorito(id:string){
const novoFavorito = favoritos.filter(filme => filme.id !== id)
setFavoritos(novoFavorito)
localStorage.setItem("@favoritos",JSON.stringify(novoFavorito))
toast.success("filme removido com sucesso!")
}

if (favoritos.length === 0) {
    return (
      <div className=" flex-col min-h-screen bg-red-900 flex justify-center items-center">
          <h2 className="text-white text-3xl font-bold">
          Nenhum filme favorito adicionado.
        </h2><br />
        <h3 className="text-2xl border- text-gray-900 "><Link to="/">Adicione um filme aos seus favoritos aqui!</Link></h3>
      </div>
      
    );
  }

    return(
 
        <div className="min-h-screen bg-red-900 p-4">
      <h1 className="text-white text-4xl font-bold mb-8 text-center">Seus Filmes Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((filme) => (
          <div
            key={filme.title}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
          >
            <h2 className="text-white font-bold text-xl p-4 text-center truncate w-full">{filme.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
              alt={filme.title}
              className="w-full object-cover"
              style={{ maxHeight: "350px" }}
            />
            <button
              onClick={() => removerFavorito(filme.id)}
              className="cursor-pointer bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 m-4 rounded"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>

)
}