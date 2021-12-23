import React from 'react'

const GoogleMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14392.240523134773!2d-73.99627807233549!3d40.682872687418396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1640258599524!5m2!1spt-BR!2sbr"
                className="lg:w-[600px] lg:h-[400px] md:w-[500px] md:h-[300px] xl:mb-0 mb-8 xl:-mr-20 mr-0"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default GoogleMap
