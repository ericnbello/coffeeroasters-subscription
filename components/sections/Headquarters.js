export default function Headquarters() {
    const offices = [
        {
            icon: '/illustration-uk.svg',
            country: 'United Kingdom',
            street: '68 Asfordby Rd',
            city: 'Alcaston',
            postalCode: 'SY6 1YA',
            phone: '+44 1241 918425'
        },
        {
            icon: '/illustration-canada.svg',
            country: 'Canada',
            street: '1528 Eglinton Avenue',
            city: 'Toronto',
            postalCode: 'Ontario M4P 1A6',
            phone: '+1 416 485 2997'
        },
        {
            icon: '/illustration-australia.svg',
            country: 'Australia',
            street: '36 Swanston Street',
            city: 'Kewell',
            postalCode: 'Victoria',
            phone: '+61 4 9928 3629'
        }
    ]

    return (
        <section className="p-6">
            {/* <div> */}
                <div className="flex justify-center md:justify-start py-10">
                    <h2 className="font-fraunces font-bold text-2xl md:text-2xl text-darkGreyBlue py-3">Our headquarters</h2>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                    {offices.map((location, i) => (
                        <HeadquarterCard
                            country={location.country}
                            street={location.street}
                            city={location.city}
                            postalCode={location.postalCode}
                            icon={location.icon}
                            phone={location.phone}
                            number={`${i + 1}`}
                        />
                        ))}
                </div>
            {/* </div> */}
        </section>
    )
}

const HeadquarterCard = ({ icon, country, street, city, postalCode, phone}) => {
    return (
        <div className="flex flex-col pb-6">
            <div className="flex flex-row justify-center md:justify-start">
                <img
                    src={icon}
                    alt="headquarters-office"
                    className=""
                />
            </div>
            <div className="flex flex-col justify-start">
                <h1 className="font-fraunces text-center md:text-left text-gray-50 font-bold text-2xl pt-5">
                {country}
                </h1>
                <div className="font-barlow text-center md:text-left text-gray-50 text-lg py-5">
                    <p>{street}</p>
                    <p>{city}</p>
                    <p>{postalCode}</p>
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    );
  };