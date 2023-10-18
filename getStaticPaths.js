// Importa os componentes que você deseja renderizar
import DocentesPage from "./pages/docentes";
import DiscentesPage from "./pages/discentes";

// Define as rotas que você deseja renderizar
const paths = getStaticPaths({
  paths: [
    {
      path: "/docentes",
      component: () => import("./pages/docentes"),
    },
    {
      path: "/discentes",
      component: () => import("./pages/discentes"),
    },
  ],
});

// Serve os componentes para as rotas definidas
export const getStaticProps = async () => {
  // Retorna os arquivos que devem ser servidos
  return {
    paths,
  };
};