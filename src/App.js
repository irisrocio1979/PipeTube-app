import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import Banner from './componentes/Banner';
import MiOrg from './componentes/MiOrg';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [videos, actualizarVideos] = useState([{
    id: uuid(),
      categoria: "Machine Learning",
      urlImagen: "https://img.youtube.com/vi/8Ht3ATIEwDs/0.jpg",
      urlVideo: "https://www.youtube.com/embed/8Ht3ATIEwDs",
      titulo: "Transformers Tutorial",
      descripcion: "Paper Explained + Implementation in Tensorflow and Pytorch",
      fav: true
    },
    {
      id: uuid(),
      categoria: "Magic Leap",
      urlImagen: "https://img.youtube.com/vi/ZuTkhHBLYnk/0.jpg",
      urlVideo: "https://www.youtube.com/embed/ZuTkhHBLYnk",
      titulo: "Magic Leap Development",
      descripcion: "Magic Leap Development with Unity3d and porting an existing non-AR game to the Magic Leap platform",
      fav: false
    },
    {
      id: uuid(),
      categoria: "AWS",
      urlImagen: "https://img.youtube.com/vi/CezYbKuGReo/0.jpg",
      urlVideo: "https://www.youtube.com/embed/CezYbKuGReo",
      titulo: "Probando LocalStack - Una nube en tu local",
      descripcion: "Aprendiendo sobre LocalStack",
      fav: false
    },
    {
      id: uuid(),
      categoria: "AWS",
      urlImagen: "https://img.youtube.com/vi/-NvSELHqJIc/0.jpg",
      urlVideo: "https://www.youtube.com/embed/-NvSELHqJIc",
      titulo: "AWS EventBridge Pipe",
      descripcion: "EventBridge Pipes is a new feature introduced by AWS in 2021",
      fav: false
    },
    {
      id: uuid(),
      categoria: "Programación",
      urlImagen: "https://img.youtube.com/vi/TTMxxwRyQQE/0.jpg",
      urlVideo: "https://www.youtube.com/embed/TTMxxwRyQQE",
      titulo: "¿COMO INICIAR EN LA PROGRAMACION COMPETITIVA?",
      descripcion: "Cómo comenzar en la programción competitiva",
      fav: false
    },
    {
      id: uuid(),
      categoria: "Machine Learning",
      urlImagen: "https://img.youtube.com/vi/6CkSmwVDpzA/0.jpg",
      urlVideo: "https://www.youtube.com/embed/6CkSmwVDpzA",
      titulo: "Reconociendo Rostros",
      descripcion: "Implementación con Amazon Rekognition",
      fav: false
    },
    {
      id: uuid(),
      categoria: "UX y Diseño",
      urlImagen: "https://img.youtube.com/vi/lYWOzxVCTao/0.jpg",
      urlVideo: "https://www.youtube.com/embed/lYWOzxVCTao",
      titulo: "¿Qué es UX Desingn?",
      descripcion: "Diseño de experiencia de Usuario",
      fav: false
    },
    {
      id: uuid(),
      categoria: "Móvil",
      urlImagen: "https://img.youtube.com/vi/O0B_3Wkfths/0.jpg",
      urlVideo: "https://www.youtube.com/embed/O0B_3Wkfths",
      titulo: "DESARROLLADOR de APPS MOBILE",
      descripcion: "Así es ser DESARROLLADOR de APPS MOBILE ¿Cuánto puedes ganar? Desarrollador de Aplicaciones",
      fav: false
    
  }])

  const [categorias, actualizarCategorias] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "AWS",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Machine Learning",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Magic Leap",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const lastVideo = videos[videos.length - 1]; 

  

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }



  //Registrar colaborador

  const registrarVideo = (video) => {
    console.log("Nuevo video", video)
    //Spread operator
    actualizarVideos([...videos, video])
  }

  //Eliminar colaborador
  const  eliminarVideo  = (id) => {
    console.log("Eliminar video", id)
    const nuevosVideos = videos.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
  }

  //Actualizar color de Categoria
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const categoriasActualizadas = categorias.map((categoria) => {
      if (categoria.id === id) {
        categoria.colorPrimario = color;
      }
      return categoria;
    });
    actualizarCategorias(categoriasActualizadas);
  }

  //Crear categoria
  const crearCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria)
    actualizarCategorias([...categorias, { ...nuevaCategoria, id: uuid() }]);
  }

  const like = (id) => {
    console.log("like", id)
    const videosActualizados = videos.map((video) => {
      if (video.id === id) {
        video.fav = !video.fav
      }
      return video
    })

    actualizarVideos(videosActualizados)
  }

  const editarVideo = (id, datosActualizados) => {
    const videosActualizados = videos.map((video) => {
      if (video.id === id) {
        return { ...video, ...datosActualizados };
      }
      return video;
    });
    actualizarVideos(videosActualizados);
  }



  return (
    <div>
      <Header cambiarMostrar={cambiarMostrar}/>
      <Banner video={lastVideo} />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => categoria.titulo)}
          registrarVideo={registrarVideo}
          crearCategoria={crearCategoria}
        />
      }

      
      <MiOrg />

      

      {
        categorias.map((categoria) => <Categoria
          datos={categoria}
          key={categoria.titulo}
          videos={videos.filter(video => video.categoria === categoria.titulo)}
          eliminarVideo={eliminarVideo}
          actualizarColor={actualizarColor}
          like={like}
          editarVideo={editarVideo}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;