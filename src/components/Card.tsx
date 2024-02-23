const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.', img:"https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover', imagen:"https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Card() {
    return (
      <div className="bg-white lex justify-center items-center min-h-screen">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
    <div className="mx-auto max-w-2xl grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-80  bg-cyan-200">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Título de la Card</h2>
        <p className="mt-4 text-gray-500">
          Esta es la descripción de la card. Puedes modificar este texto para que se ajuste a tu contenido.
        </p>
      </div>
      <div>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsticker-png-tiveh&psig=AOvVaw1vgo5Y2P2RAPDtALwZixHE&ust=1708652913974000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC20MPqvYQDFQAAAAAdAAAAABAP" // Reemplaza con tu URL de imagen
          alt="Descripción de la imagen"
          className="h-48 w-full object-cover lg:h-auto lg:w-50"
        />
      </div>
    </div>
  
            <div className="flex justify-center items-center min-h-screen">
  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
    {features.map((feature) => (
      <div key={feature.name} className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">{feature.name}</dt>
        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
        <img
          src={feature.imagen}
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          className="rounded-lg bg-gray-100"
        />
      </div>
    ))}
  </dl>
</div>

          </div>
          
        </div>
      </div>
    )
  }
  