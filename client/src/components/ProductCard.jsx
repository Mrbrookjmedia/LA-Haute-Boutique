import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.png'
import product4 from '../assets/images/product4.png'


const products = [
    {
      id: 1,
      name: 'Black Sweatshirt with ....',
      href: '#',
      imageSrc: product1 ,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$123.00',
      brand: 'Jhanvi’s  Brand',
    },
    {
      id: 2,
      name: 'line Pattern Black H...',
      href: '#',
      imageSrc: product2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$37.00',
      brand: 'AS’s  Brand',
    },
    {
      id: 3,
      name: 'Black Shorts',
      href: '#',
      imageSrc: product3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$37.00',
      brand: 'MM’s  Brand',
    },
    {
      id: 4,
      name: 'Levender Hoodie with ....',
      href: '#',
      imageSrc: product4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$119.00',
      brand: 'Nike’s  Brand',
    },
    // More products...
  ]
  
  export default function ProductCard() {
    return (
      <div className="bg-white">
        <div 
        style={{ paddingTop: '50px' }}
         className="mx-auto max-w-4xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
  
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-[300px] rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="  text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    )
  }
  