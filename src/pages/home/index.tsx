import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

interface MovieProps{
    id:string;
    title:string;
    poster_path:string

}

export function Home(){
    const [movies,setMovies] = useState<MovieProps[]>([])


    useEffect(()=>{

        async function start(){
         await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=97255ce5ea79c0554991ceb19767786b&language=pt-BR&page=1')
          
            .then((response) => response.json())
            .then(data => {
          setMovies(data.results)
          console.log(data.results)
            })
            .catch((error)=>{
                console.error("Error ao carregar filmes", error)
            })
        }
start()
    },[])


    return(
        <div   style={{
    backgroundImage:
      'repeating-linear-gradient(45deg, rgba(205,205,205,0.05) 0, rgba(10,10,10,0.6) 10px, transparent 10px, transparent 20px)',
  }}
         className="  bg-red-900 min-w-fulll min-h-screen rounded" >
          <div className="flex itemns-center justify-center  ">
              <h1  style={{ textShadow: "5px 4px 3px rgba(0,0,0,0.7)" }} className=" p-3 
              font-mono text-3xl mt-5 text-white font-bold  rounded-md uppercase">Far Player</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 ">
          {movies.map((filme)=>(
           <div className="flex flex-col items-center"
           key={filme.id}>
            <h2 className="text-center p-4 gap-4 mt-5 mb-4 text-2xl font-bold text-white truncate max-w-md">{filme.title}</h2>
           <img className="rounded-t-lg"
           style={{width: '90%', maxWidth: '350px', height: '90%'}}
           src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}></img> <Link className="
           block w-[90%] max-w-[350px] text-center bg-gray-800 bg-opacity-90 p-1 rounded-b-lg hover:bg-gray-900
           text-2xl  font-bold text-white " to={'/detail'}>Acessar</Link>
           </div>

          ))}
          </div>
        </div>
    )
}