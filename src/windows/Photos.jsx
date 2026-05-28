import { WindowConrtols } from '#components'
import { gallery, photosLinks } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { clsx } from 'clsx'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const Photos = () => {
  const [activeCategory, setActiveCategory] = useState(photosLinks[0])

  return (
    <>
      <div id="window-header">
        <WindowConrtols target="photos" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <h2>Categories</h2>
          <ul>
            {photosLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveCategory(item)}
                className={clsx(
                  'flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors',
                  item.id === activeCategory.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-200',
                )}
              >
                <img src={item.icon} alt={item.title} className="w-4" />
                <p className="text-sm font-medium truncate">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <h3 className="mb-4 text-sm font-semibold text-gray-500">Selected</h3>
          <div className="mb-4 rounded-lg border border-gray-200 p-4">
            <p className="text-lg font-semibold">{activeCategory.title}</p>
            <p className="text-sm text-gray-500">Browse all photos under the selected gallery category.</p>
          </div>

          <ul>
            {gallery.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')
export default PhotosWindow