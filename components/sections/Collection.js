export default function Collection() {
    const collection = [
        {
            title: 'Gran Espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            img: '/image-gran-espresso.png'
        },
        {
            title: 'Planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            img: '/image-planalto.png'
        },
        {
            title: 'Picollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
            img: '/image-piccollo.png'
        },
        {
            title: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            img: '/image-danche.png'
        }
    ]

    return (
        <sectiion className="mx-auto p-6">
            <div className="p-10">
                <div className="flex justify-center">
                    <h2 className="font-fraunces text-7xl">our collection</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    {collection.map((product, i) => (
                        <CollectionCard
                          title={product.title}
                          description={product.description}
                          img={product.img}
                          number={`${i + 1}`}
                        />
                      ))}
                </div>
            </div>
        </sectiion>
    )
}

const CollectionCard = ({ title, description, img}) => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-col p-6">
            <div>
                <img
                    src={img}
                    alt="coffeeroasters-product"
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="flex flex-col justify-start">
                <h1 className="font-fraunces text-center md:text-left lg:text-center text-gray-50 font-bold text-xl px-2 py-5">
                {title}
                </h1>
                <p className="font-barlow text-center md:text-left lg:text-center text-gray-50 text-sm px-2 py-5">{description}</p>
            </div>
        </div>
    );
  };