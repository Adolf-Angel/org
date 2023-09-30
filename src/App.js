import { useState } from 'react';
import  {v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';




function App() {

  const [MostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([

    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
      
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false

    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }

  ]);


  const [equipos, actualizarEquipos] = useState([

    //lista de equipos


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
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"

    },

    {
      id: uuid(),
      titulo: "Devops",
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
      titulo: "Movíl",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"

    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"

    }




  ])

  //ternario __ condicion? seMuestra: noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!MostrarFormulario);
  }

  // registrar Colaborador

  const registrarColaborador = (colaborador) => {

    console.log("nuevo colaborador", colaborador);

    // spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //actualizar Color de Equipo
  const actualizarColorEquipo = (color, id) => {
   // console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
        if(equipo.id=== id){
          equipo.colorPrimario = color;
        }

        return equipo;

    })

    actualizarEquipos (equiposActualizados);

  }


    //crear equipo
    const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo);
      actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
      // los puntos indican que va a copiar el valor que tiene actualmente "equipos"
      //luego agregará un nuevo objeto
    }

    const like = (id) => {
      console.log("like", id);
      const colaboradoresActializados = colaboradores.map((colaborador)=>{
        if (colaborador.id === id){
          colaborador.fav =! colaborador.fav;
        }
        return colaborador;
      })
    }

  //eliminar colaborador
  const eliminarColaborador = (id) => {

    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }



  return (
    <div>
      {/* {Header()}   
      <Header></Header> */}
      <Header />
      {/* { MostrarFormulario ? <Formulario /> : <> </>} */}
      {MostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}


      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColorEquipo}
          like={like}
          
        />)
      }

      <Footer />


    </div>
  );
}

export default App;
