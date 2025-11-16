import { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Download, Share2, FileText } from 'lucide-react';

const mediaCategories = [
  {
    id: 'all',
    name: 'All Media',
    count: 12
  },
  {
    id: 'videos',
    name: 'Videos',
    count: 4
  },
  {
    id: 'images',
    name: 'Images',
    count: 8
  },
  {
    id: 'documents',
    name: 'Documents',
    count: 3
  }
];

// Function to generate placeholder image URL
const getPlaceholderImage = (width, height, text = 'Venjas Pharma') => {
  return `https://placehold.co/${width}x${height}/FF6B35/white?text=${encodeURIComponent(text)}`;
};

// Function to generate placeholder video thumbnail
const getVideoThumbnail = (width, height, text = 'Video') => {
  return `https://placehold.co/${width}x${height}/DC2626/white?text=${encodeURIComponent(text)}`;
};

// Function to generate document thumbnail
const getDocumentThumbnail = (width, height, text = 'PDF') => {
  return `https://placehold.co/${width}x${height}/16A34A/white?text=${encodeURIComponent(text)}`;
};

const mediaItems = [
  // Videos
  {
    id: 1,
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: getVideoThumbnail(400, 300, 'Company Overview'),
    title: 'Company Overview',
    description: 'A comprehensive look at Venjas Pharma facilities and operations',
    category: 'videos',
    duration: '2:45'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: getVideoThumbnail(400, 300, 'Manufacturing Process'),
    title: 'Manufacturing Process',
    description: 'See how we maintain quality standards in production',
    category: 'videos',
    duration: '3:20'
  },
  {
    id: 3,
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: getVideoThumbnail(400, 300, 'Quality Control'),
    title: 'Quality Control Lab',
    description: 'Tour of our advanced quality testing facilities',
    category: 'videos',
    duration: '4:15'
  },
  {
    id: 4,
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: getVideoThumbnail(400, 300, 'Team Interview'),
    title: 'Expert Team Interview',
    description: 'Meet our pharmaceutical experts and researchers',
    category: 'videos',
    duration: '5:30'
  },

  // Images
  {
    id: 5,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Manufacturing Facility'),
    thumbnail: getPlaceholderImage(400, 300, 'Manufacturing Facility'),
    title: 'Main Manufacturing Facility',
    description: 'State-of-the-art production unit with advanced technology',
    category: 'images'
  },
  {
    id: 6,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Laboratory Equipment'),
    thumbnail: getPlaceholderImage(400, 300, 'Lab Equipment'),
    title: 'Advanced Laboratory Equipment',
    description: 'Cutting-edge instruments for quality assurance',
    category: 'images'
  },
  {
    id: 7,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Expert Team'),
    thumbnail: getPlaceholderImage(400, 300, 'Our Team'),
    title: 'Our Expert Team',
    description: 'Dedicated professionals committed to healthcare excellence',
    category: 'images'
  },
  {
    id: 8,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Product Range'),
    thumbnail: getPlaceholderImage(400, 300, 'Products'),
    title: 'Product Portfolio',
    description: 'Comprehensive range of pharmaceutical solutions',
    category: 'images'
  },
  {
    id: 9,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Packaging Line'),
    thumbnail: getPlaceholderImage(400, 300, 'Packaging'),
    title: 'Packaging Line',
    description: 'Automated packaging ensuring product safety',
    category: 'images'
  },
  {
    id: 10,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'R&D Department'),
    thumbnail: getPlaceholderImage(400, 300, 'R&D'),
    title: 'R&D Department',
    description: 'Innovation hub for new product development',
    category: 'images'
  },
  {
    id: 13,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Quality Control'),
    thumbnail: getPlaceholderImage(400, 300, 'Quality'),
    title: 'Quality Assurance',
    description: 'Rigorous testing procedures and quality checks',
    category: 'images'
  },
  {
    id: 14,
    type: 'image',
    src: getPlaceholderImage(800, 600, 'Warehouse'),
    thumbnail: getPlaceholderImage(400, 300, 'Storage'),
    title: 'Storage Facility',
    description: 'Modern warehouse with temperature-controlled storage',
    category: 'images'
  },

  // Documents
  {
    id: 11,
    type: 'document',
    src: '/media/quality-certificate.pdf',
    thumbnail: getDocumentThumbnail(400, 300, 'Quality Cert'),
    title: 'Quality Certifications',
    description: 'International quality standards and certifications',
    category: 'documents',
    pages: 8
  },
  {
    id: 12,
    type: 'document',
    src: '/media/company-brochure.pdf',
    thumbnail: getDocumentThumbnail(400, 300, 'Brochure'),
    title: 'Company Brochure',
    description: 'Comprehensive overview of Venjas Pharma',
    category: 'documents',
    pages: 12
  },
  {
    id: 15,
    type: 'document',
    src: '/media/product-catalog.pdf',
    thumbnail: getDocumentThumbnail(400, 300, 'Catalog'),
    title: 'Product Catalog',
    description: 'Complete list of our pharmaceutical products',
    category: 'documents',
    pages: 24
  }
];

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openModal = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsVideoPlaying(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsVideoPlaying(false);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(filteredMedia[nextIndex]);
    setIsVideoPlaying(false);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(filteredMedia[prevIndex]);
    setIsVideoPlaying(false);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const downloadMedia = (item) => {
    if (item.type === 'document') {
      alert('Document download would be available with actual files');
      return;
    }
    
    const link = document.createElement('a');
    link.href = item.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareMedia = async (item) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.origin + '/media',
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      navigator.clipboard.writeText(`${item.title} - ${item.description}\n${window.location.origin}/media`);
      alert('Media information copied to clipboard!');
    }
  };

  // Update category counts based on actual data
  const updatedCategories = mediaCategories.map(cat => ({
    ...cat,
    count: mediaItems.filter(item => cat.id === 'all' || item.category === cat.id).length
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our facilities, processes, and achievements through videos, images, and documents
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {updatedCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => openModal(item, index)}
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-200 overflow-hidden relative rounded-t-xl">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x300/6B7280/white?text=${encodeURIComponent(item.type.toUpperCase())}`;
                    }}
                  />
                  
                  {/* Media Type Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white ${
                    item.type === 'video' ? 'bg-red-500' : 
                    item.type === 'image' ? 'bg-blue-500' : 'bg-green-500'
                  }`}>
                    {item.type.toUpperCase()}
                  </div>

                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 p-4 rounded-full">
                        <Play className="w-6 h-6 text-gray-900" />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </div>
                    </div>
                  )}

                  {/* Document Icon */}
                  {item.type === 'document' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 p-4 rounded-full">
                        <FileText className="w-6 h-6 text-gray-900" />
                      </div>
                      {item.pages && (
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {item.pages} pages
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-8xl mb-6">📁</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No media found</h3>
              <p className="text-lg text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-4 left-4 flex space-x-2 z-10">
              <button
                onClick={() => downloadMedia(selectedItem)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">View</span>
              </button>
              <button
                onClick={() => shareMedia(selectedItem)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              {selectedItem.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full max-h-[70vh] object-contain"
                    controls={false}
                    muted={isMuted}
                    loop
                    poster={selectedItem.thumbnail}
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Video Controls */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/50 rounded-lg px-4 py-2">
                    <button
                      onClick={toggleVideoPlayback}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    <span className="text-white text-sm">
                      {selectedItem.duration}
                    </span>
                  </div>
                </div>
              ) : selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = getPlaceholderImage(800, 600, selectedItem.title);
                  }}
                />
              ) : (
                <div className="w-full max-h-[70vh] flex items-center justify-center p-12">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedItem.description}
                    </p>
                    {selectedItem.pages && (
                      <p className="text-sm text-gray-500 mb-4">
                        {selectedItem.pages} pages
                      </p>
                    )}
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => downloadMedia(selectedItem)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}