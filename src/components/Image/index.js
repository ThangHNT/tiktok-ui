import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import image from '~/assets/images/No-Image-Placeholder.svg.png';
import styles from '../Image/Image.module.scss';
import classNames from 'classnames/bind';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = image, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
