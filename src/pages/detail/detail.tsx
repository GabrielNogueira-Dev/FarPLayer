import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import './index.css'

interface DetailProps{
    id:string;
    title:string;
    backdrop_path:string;
    overview:string;
    release_date:string;
    vote_average:number;
   poster_path:string;
   
}

export function Detail(){
const {id} = useParams()
const [movieDetail,setMovieDetail] = useState<DetailProps | null>(null)
const navigate = useNavigate()

useEffect(()=>{

    async function details(){
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=97255ce5ea79c0554991ceb19767786b&language=pt-BR`)
        .then((response) => response.json())
        .then((data)=>{
setMovieDetail(data)
console.log(data)
        })
        .catch((error)=>{
console.log("deu error",error)
        })
    }
details()
},[id])

function handleFavorite(){
if(!movieDetail) return

const favoritos = JSON.parse(localStorage.getItem("@favoritos") || "[]");

const filmeExiste = favoritos.some((filme:DetailProps) => filme.id === movieDetail.id);

if(filmeExiste){
    alert("Filme foi adicionado anteriormente!")
    
}else{
    favoritos.push(movieDetail)

localStorage.setItem("@favoritos",JSON.stringify(favoritos));
alert("Filme adicionado com sucesso")
}

navigate("/favoritos");

}

    return(
   <div className="min-h-screen bg-red-900 ">
    {movieDetail ? (
      <div className=" flex flex-col justify-center items-center">
        <h2 className="p-10 font-extrabold text-center">{movieDetail.title}</h2>
       
<div className="cursor-pointer flip-container">
  <div className="flipper">
    {/* Frente */}
    <div className="front">
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
        alt="Backdrop"
      />
    </div>

    {/* Verso */}
    <div className="back">
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
        alt="Poster"
      />
    </div>
  </div>
</div>
<main className="m-3 text-center mt-5">
  <span className="mt-5 font-bold text-amber-100 ">Detalhes: </span>
  <span className="text-center font-semibold text-white">{movieDetail.overview}</span>  
</main>

  <main className="m-3 flex justify-center items-center gap-10 mt-5">
    <div>
      <span className="font-bold text-amber-100">Nota:</span>
      <span className="font-semibold text-white">{movieDetail.vote_average.toFixed(1)}</span>
  </div>

  <div className="m-3  flex items-center gap-2 mt-2">
     <span className="font-bold text-amber-100">Criado:</span>
        <span className="font-semibold text-white">{movieDetail.release_date}</span>
  </div>
  </main>


<div className="flex gap-5">
    <button onClick={handleFavorite}
   
className="uppercase cursor-pointer font-bold rounded-md p-2 bg-black text-red-900
 hover:bg-white hover:text-red-900 transition hover:scale-110 duration-300">Adicionar Favoritos</button>

      <button className="uppercase cursor-pointer font-bold rounded-md p-2 bg-black text-red-900
 hover:bg-white hover:text-red-900 transition hover:scale-110 duration-300">
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movieDetail?.title} Trailer`}>
            Trailer
          </a>
        </button>
</div>
      </div>
    ) : (
      <p className=" text-3xl font-bold h-screen  flex justify-center items-center">Carregando detalhes...</p>
    )}
   
  </div>
    )
}