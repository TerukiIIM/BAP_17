import { useState, useEffect } from "react";

const BookFlipper = () => {
    const pages = [
        {
            front: {
                img: "/L1.png",
                type: "default",
            },
            back: {
                // number: 2,
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
                // number: 6,
                type: "default",
            },
        },
        {
            front: {
                // number: 7,
                type: "cover",
            },
            back: {
                img: "/L5.png",
                id: "back-cover",
                type: "back-cover",
            },
        },
    ];

    const [pageState, setPageState] = useState({
        currentPage: 0,
        flippedPages: new Array(pages.length).fill(false),
        isClosing: false,
    });

    const zIndexLogic = (index, currentPage, totalPages) => {
        if (index < currentPage) {
            return index;
        }
        return totalPages - index;
    };

    useEffect(() => {
        if (pageState.currentPage === pages.length && !pageState.isClosing) {
            const timeout = setTimeout(() => {
                setPageState((prev) => ({
                    ...prev,
                    isClosing: true,
                }));

                let currentPageInAnim = pages.length;
                const interval = setInterval(() => {
                    if (currentPageInAnim <= 0) {
                        clearInterval(interval);
                        setPageState({
                            currentPage: 0,
                            flippedPages: new Array(pages.length).fill(false),
                            isClosing: false,
                        });
                        return;
                    }

                    setPageState((prev) => {
                        const newFlipped = [...prev.flippedPages];
                        newFlipped[currentPageInAnim - 1] = false;

                        return {
                            ...prev,
                            currentPage: currentPageInAnim - 1,
                            flippedPages: newFlipped,
                        };
                    });

                    currentPageInAnim--;
                }, 300);
            }, 2000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [pageState.currentPage, pageState.isClosing, pages.length]);

    const turnRight = () => {
        if (pageState.isClosing) return;

        setPageState((prevState) => {
            if (prevState.currentPage >= pages.length) return prevState;

            const newPage = prevState.currentPage + 1;
            const newFlipped = [...prevState.flippedPages];

            newFlipped[newPage - 1] = true;

            return {
                ...prevState,
                currentPage: newPage,
                flippedPages: newFlipped,
            };
        });
    };

    const turnLeft = () => {
        if (pageState.isClosing) return;

        setPageState((prevState) => {
            if (prevState.currentPage <= 0) return prevState;

            const newPage = prevState.currentPage - 1;
            const newFlipped = [...prevState.flippedPages];

            newFlipped[newPage] = false;

            return {
                ...prevState,
                currentPage: newPage,
                flippedPages: newFlipped,
            };
        });
    };

    const renderPageContent = (page, side) => {
        const content = page[side];

        if (!content) return null;

        if (content.img) {
            return <img src={content.img} alt={`${side} page`} />;
        }

        if (content.number) {
            return <p>{content.number}</p>;
        }

        if (side === "front" && content.type === "cover") {
            return (
                <>
                    {content.title && <h1>{content.title}</h1>}
                    {content.subtitle && <p>{content.subtitle}</p>}
                </>
            );
        }

        return null;
    };

    return (
        <div className="book-section">
            <div className="container">
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`right ${
                            pageState.flippedPages[index] ? "flip" : ""
                        }`}
                        style={{
                            zIndex: zIndexLogic(
                                index,
                                pageState.currentPage,
                                pages.length
                            ),
                        }}
                    >
                        <figure
                            className="back"
                            id={index === pages.length ? "back-cover" : ""}
                            style={{
                                backgroundImage: page.back.img
                                    ? `url(${page.back.img})`
                                    : "none",
                            }}
                        >
                            {renderPageContent(page, "back")}
                        </figure>
                        <figure
                            className="front"
                            id={index === 0 ? "cover" : ""}
                            style={{
                                backgroundImage: page.front.img
                                    ? `url(${page.front.img})`
                                    : "none",
                            }}
                        >
                            {renderPageContent(page, "front")}
                        </figure>
                    </div>
                ))}
            </div>
            <div className="controls">
                <button
                    className="bt"
                    onClick={turnLeft}
                    disabled={
                        pageState.currentPage === 0 || pageState.isClosing
                    }
                >
                    Prev
                </button>
                <button
                    className="bt"
                    onClick={turnRight}
                    disabled={
                        pageState.currentPage === pages.length ||
                        pageState.isClosing
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookFlipper;
