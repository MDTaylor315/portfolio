import React from 'react';

interface CrystalButtonProps {
    children?: React.ReactNode;
    icon?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const CrystalButton = ({ children, icon, href, onClick, className = "" }: CrystalButtonProps) => {
    const baseStyles = `
    group flex items-center justify-center rounded-[20px] transition-all duration-300
    bg-white/[0.02] backdrop-blur-[4px]
    shadow-[inset_1px_1px_1px_rgba(255,255,255,0.15),inset_-1px_-1px_1px_rgba(0,0,0,0.2)]
    hover:bg-white/[0.08] hover:shadow-[inset_1px_1px_1px_rgba(255,255,255,0.3)]
    relative overflow-hidden
  `;

    const content = (
        <>
            {/* Borde esquina noroeste (arriba-izquierda) con degradado */}
            <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-20 h-20 border-l border-t border-[#918F8B] rounded-tl-[20px]"
                    style={{
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        WebkitMaskComposite: 'source-in'
                    }}
                />
            </div>

            {/* Borde esquina sureste (abajo-derecha) con degradado */}
            <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
                <div
                    className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-[#918F8B] rounded-br-[20px]"
                    style={{
                        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        WebkitMaskComposite: 'source-in'
                    }}
                />
            </div>

            {icon && (
                <img
                    src={icon}
                    alt=""
                    className={`brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity relative z-10 ${children ? 'w-5 h-5 mr-2' : 'w-5 h-5'}`}
                />
            )}
            {children && (
                <span className="font-poppins font-normal text-white/90 text-base group-hover:text-white relative z-10">
                    {children}
                </span>
            )}
        </>
    );

    if (href) {
        // Si el href es mailto, no usar target="_blank"
        const isMailto = href.startsWith('mailto:');
        return (
            <a
                href={href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className={`${baseStyles} ${className}`}
            >
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {content}
        </button>
    );
};