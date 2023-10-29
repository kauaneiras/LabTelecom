import autotrac from '../assets/logos/autotrac.png'
import capes from '../assets/logos/capes.jpeg'
import clamper from '../assets/logos/clamper.jpg'
import CNPq from '../assets/logos/CNPq.png'
import fapdf from '../assets/logos/fapdf.gif'
import huawei from '../assets/logos/huawai.png'
import omnisys from '../assets/logos/omnisys.png'
import tecsys from '../assets/logos/tecsys.png'
import visiona from '../assets/logos/visiona.jpg'
import IETR from '../assets/logos/IETR.png'
import cassino from '../assets/logos/cassino.jpg'
import ilmenau from '../assets/logos/Ilmenau.webp'
import lippstadt from '../assets/logos/lippstadt.png'
import boulder from '../assets/logos/boulder.png'
import Sapienza from '../assets/logos/Sapienza.webp'
import nottingham from '../assets/logos/nottingham.jpg'
import Magala from '../assets/logos/maga.jpg'
import ukraine from '../assets/logos/ukraine.png'

const ParceirosCorporativos = [
    {
      id: 1,
      nome: "Autotrac",
      descricao: "Tecnologia para rastreamento e monitoramento de veículos",
      logo: autotrac,
      link: "https://www.autotrac.com.br/"
    },
    {
      id: 2,
      nome: "Tecsys do Brasil",
      descricao: "Software para gestão de processos industriais",
      logo: tecsys,
      link: "https://www.tecsysbrasil.com.br/"
    },
    {
      id: 3,
      nome: "Huawei",
      descricao: "Multinacional de tecnologia chinesa",
      logo: huawei,
      link: "https://www.huawei.com/br/"
    },
    {
      id: 4,
      nome: "Clamper",
      descricao: "Equipamentos de fixação e segurança industrial",
      logo: clamper,
      link: "https://clamper.com.br/"
    },
    {
      id: 5,
      nome: "Omnisys Thales",
      descricao: "Sistemas de segurança e defesa",
      logo: omnisys,
      link: "https://www.omnisys.com.br/"
    },
    {
      id: 6,
      nome: "Visiona Espacial",
      descricao: "Tecnologia espacial",
      logo: visiona,
      link: "https://visionaespacial.com/"
    },
    {
      id: 7,
      nome: "FAPDF",
      descricao: "Fundação de Apoio à Pesquisa do Distrito Federal",
      logo: fapdf,
      link: "https://www.fap.df.gov.br/"
    },
    {
      id: 8,
      nome: "CNPq",
      descricao: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      logo: CNPq,
      link: "https://www.cnpq.br/"
    },
    {
      id: 9,
      nome: "CAPES",
      descricao: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
      logo: capes,
      link: "https://www.capes.gov.br/"
    }
  ];

const UniversidadesParceiras = [
    { 
        id: 10,
        nome: "Institut d’Electronique et Télécommunications de Rennes IETR – Université de Rennes 1, França",
        descricao: "Modelagem eletromagnética e processamento do sinal eletromagnética",
        logo: IETR,
        link: "https://www.ietr.fr/"
    },
    {
        id: 11,
        nome: "DIEI, University of Cassino e Lazio Meridionale, Itália",
        descricao: "Modelagem eletromagnética e processamento do sinal eletromagnética",
        logo: cassino,
        link: "https://www.unicas.it/"
    },
    {
        id: 12,
        nome: "Institut of Radio-Physics – National Academy of Science, Karkhov, Ucrânia",
        descricao: "Modelagem eletromagnética, fotônia e nano-fotônica",
        logo: ukraine,
        link: "https://www.irt.kharkov.ua/"
    },
    {
        id: 13,
        nome: "Universidade de Malagá, Espanha",
        descricao: "Protocólos de comunicação espacial",
        logo: Magala,
        link: "https://www.uma.es/"
    },
    {
        id: 14,
        nome: "Technical University of Ilmenau, Alemanha",
        descricao: "Processamento do sinal, decomposição em componente principal",
        logo: ilmenau,
        link: "https://www.tu-ilmenau.de/"
    },
    {
        id: 15,
        nome: "Hochschule Hamm-Lippstadt, Alemanha",
        descricao: "Processamento do sinal, decomposição em componente principal",
        logo: lippstadt,
        link: "https://www.hshl.de/"
    },
    {
        id: 16,
        nome: "Universita di Roma La Sapienza, Itália",
        descricao: "Sensoriamento remoto, estações terrenas",
        logo: Sapienza,
        link: "https://www.uniroma1.it/"
    },
    {
        id: 17,
        nome: "University of Nottingham, Inglaterra",
        descricao: "Estações terrenas",
        logo: nottingham,
        link: "https://www.nottingham.ac.uk/"
    },
    {
        id: 18,
        nome: "Microwae & Active Antennas Laboratory, University of Colorado at Boulder, USA",
        descricao: "Antenas para comunicações satélitais",
        logo: boulder,
        link: "https://www.colorado.edu/"
    }
]

  export { ParceirosCorporativos, UniversidadesParceiras }