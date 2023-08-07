import "./App.css";
import CardBox from "./components/CardBox";

function App() {
  const cardData = [
    {
      name: "Club Monks",
      street: "B-34, Kartikey Colony, Kusumkhera",
      city: "haldwani",
      state: "Nainital",
      email: "clubmonks@gmail.com",
      phone: " 073005765",
    },
    {
      name: "Abhishri Tours Pvt Ltd",
      street: "6 saharanpur road patel nagar,",
      city: "dehradun",
      state: "Uttrakhand",
      email: "b_rana_99@yahoo.com",
      phone: "0965072584, Ph: 0135-2550910",
    },
    {
      name: "Sanjeevani Travels",
      street: "6 saharanpur road patel nagar",
      city: "dehradun",
      state: "Uttrakhand",
      email: "info@sanjeevnitravels.com",
      phone: "3412054672, Ph: 0135-2721458",
    },
    {
      name: "Namami Gange Tour And Travels",
      street: "Gali no 4,258 Shivpuri Colony",
      city: "haridwar",
      state: "Uttrakhand",
      email: "alka_977@rediffmail.com",
      phone: " 6303981207, 630398120",
    },
    {
      name: "Aryon Tourism Opc Pvt. Ltd.",
      street: "Ward No. 2",
      city: "gadarpur",
      state: "US Nagar,Uttakhand",
      email: "info@aryon.in",
      phone: "6396375203",
    },
    {
      name: "Sharma Travels",
      street: "214 s n nagar",
      city: "haridwar",
      state: "Uttakhand",
      email: "smrrr3@gmail.com",
      phone: " 7017071682, 7017071682",
    },
    {
      name: "Aar Kay Travel & Tour",
      street: "214 s n nagarHotel Nand Residency, Kulri, Mussoorie",
      city: "dehradun",
      state: "Uttaranchal",
      email: "aarkaytraveltours@gmail.com",
      phone: " 7017443850, Ph: 0135-2631442",
    },
    {
      name: "Yatracar.Com ",
      street: "A4 Gangotri Apartments, Gangotri Vihar Dhalwala, Rishikesh",
      city: " rishikesh, tehri",
      state: "Uttaranchal",
      email: "saritadhanai055@gmail.com",
      phone: " 7017727836",
    },
    {
      name: "Sita Ram Travels",
      street: "Rishikesh road near jain mandir bhpatwala",
      city: "haridwar",
      state: "Uttrakhand",
      email: "amitvermahindustantour@gmail.com",
      phone: "7060338741, 7060338741",
    },
  ];
  return <div className=" flex flex-col justify-center items-center">
    <div className="p-[1rem] bg-slate-300 w-full font-bold text-4xl text-center mb-10">Hari ॐ</div>
    <div className="w-11/12">
    <CardBox cardData={cardData}/>
    </div>
  </div>;
}

export default App;
