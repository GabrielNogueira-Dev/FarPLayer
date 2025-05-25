import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './index.css'

interface DetailProps{
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

function handleadd(){
alert("d")
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

<button onClick={handleadd}
className="uppercase cursor-pointer font-bold rounded-md p-2 bg-black text-red-900
 hover:bg-white hover:text-red-900 transition hover:scale-110 duration-300">Adicionar Favoritos</button>

      </div>
    ) : (
      <p className=" text-3xl font-bold h-screen  flex justify-center items-center">Carregando detalhes...</p>
    )}
  </div>
    )
}