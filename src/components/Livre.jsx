import { useState } from "react";

const BookFlipper = () => {
    const pages = [
        {
            front: {
                img: "/L1.png",
                type: "default",
            },
            back: {
                number: 2,
                type: "default",
            },
        },
        {
            front: {
                img: "/L2.png",
                type: "default",
            },
            back: {
                img: "/L3.png",
                type: "default",
            },
        },
        {
            front: {
                img: "/L4.png",
                type: "default",
            },
            back: {
                number: 6,
                type: "default",
            },
        },
        {
            front: {
                number: 7,
                type: "cover",
                title: "My Book",
                subtitle: "A wonderful story",
            },
            back: {
                img: "/L.png",
                id: "back-cover",
                type: "back-cover",
            },
        },
    ];

    const [currentPageIndex, setCurrentPageIndex] = useState(pages.length - 1);
    const [zIndexes, setZIndexes] = useState(Array(pages.length).fill(1));

    const turnRight = () => {
        setCurrentPageIndex((prev) => {
            const newIndex = prev > 0 ? prev - 1 : pages.length - 1;
            const newZIndexes = [...zIndexes];
            newZIndexes[newIndex] = Math.max(...newZIndexes) + 1;
            setZIndexes(newZIndexes);
            return newIndex;
        });
    };

    const turnLeft = () => {
        setCurrentPageIndex((prev) => {
            const newIndex = prev < pages.length - 1 ? prev + 1 : 0;
            const newZIndexes = [...zIndexes];
            newZIndexes[newIndex] = Math.max(...newZIndexes) + 1;
            setZIndexes(newZIndexes);
            return newIndex;
        });
    };

    const renderFigureContent = (pageContent) => {
        if (pageContent.type === "cover") {
            return (
                <div>
                    <h1>{pageContent.title}</h1>
                    <p>{pageContent.subtitle}</p>
                </div>
            );
        }

        if (pageContent.img) {
            return (
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `url(${pageContent.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            );
        }

        return <p>{pageContent.number}</p>;
    };

    return (
        <div className="book-section">
            <div className="container">
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`right ${
                            index === currentPageIndex ? "flip" : ""
                        }`}
                        style={{ zIndex: zIndexes[index] || 1 }}
                    >
                        {page.back && (
                            <figure className="back" id={page.back.id || ""}>
                                {renderFigureContent(page.back)}
                            </figure>
                        )}
                        {page.front && (
                            <figure
                                className="front"
                                id={page.front.id || page.front.type || ""}
                            >
                                {renderFigureContent(page.front)}
                            </figure>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <button onClick={turnLeft}>Prev</button>
                <button onClick={turnRight}>Next</button>
            </div>
        </div>
    );
};

export default BookFlipper;
