import {MdChildFriendly,MdLocalGroceryStore,MdCleaningServices,MdOutlineLocalGroceryStore} from "react-icons/md";
import {GiMilkCarton} from 'react-icons/gi';
import  {BiCookie,BiOutline,BiHealth} from 'react-icons/bi'
import {TbMeat} from 'react-icons/tb';
import {GiAnimalSkull} from "react-icons/gi";

export const categories = [

      
      {id:2,value:"monde bébé",text:"Monde Bébé",children: <MdChildFriendly />},
      {id:3,value:"bio & santé",text:"Bio & santé",children:<BiHealth />},

      {id:4,value:"produit laitiers",text:"Produit laitiers",children:<GiMilkCarton />},
      {id:5,value:"Epicerie",text:"Epicerie",children:<MdLocalGroceryStore />},
      {id:6,value:"biscuits et snacks",text:"Biscuits et Snacks",children:<BiCookie />},
      {id:7,value:"charcuterie",text:"Charcuterie",children:<TbMeat />},
      {id:8,value:"hygiéne & Soin",text:"Hygiéne & Soin",children:<BiOutline />},

      {id:9,value:"entretien et nettoyage",text:"Nettoyage",children:<MdCleaningServices />},

      {id:10,value:"épicerie fine",text:"Epicerie Fine",children:<MdOutlineLocalGroceryStore />},
      {id:11,value:"animaux",text:"Animaux",children:<GiAnimalSkull />},
];