import "../3DObject.css" // Create a CSS file for styling
import "../assets/css/style.css"
import Level1 from "../levels/Level1"
import Level2 from "../levels/Level2"
import Level3 from "../levels/Level3"
import Level4 from "../levels/Level4"
// import { MouseEvent } from "react"
import { SetStateAction, useState } from "react"
import Hidden from "./HiddenSVG"
import { FirstFloorPins, ForthFloorPins, SecondFloorPins, ThirdFloorPins } from "./Lists/PinsLists"
import { contentItems } from "./Lists/ContentLists"
import { listItems, listItems1 } from "./Lists/AsideList"
const ThreeDObject = () => {
    document.addEventListener("contextmenu", (event) => event.preventDefault())
    const [isSelected, setSelected] = useState("")
    const [isOpen, setOpen] = useState(false)
    const levels = 7
    const [isCurrent, setCurrent] = useState(0)
    const [isCurrentContent, setCurrentContent] = useState("")

    const [search, setSearch] = useState("")
    const OnChangeHandler = (e: { target: { value: SetStateAction<string> } }) => {
        setSearch(e.target.value)
    }

    const handleHover = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const ariaLabel = event.currentTarget.getAttribute("aria-label")
        const spaceData = event.currentTarget.getAttribute("data-space")
    }

    const handleContentView = (index: string, level: string) => {
        if (contentItems.some((item) => item.dataSpace === index)) {
            setSelected(`levels--selected-${level} levels--open`)
            setCurrent(parseInt(level))
            setOpen(true)
            setCurrentContent(index)
        }
    }

    const handleUpDown = (where: string) => {
        if (where === "up" && isCurrent < levels) {
            setCurrent(isCurrent + 1)
            setSelected(`levels--selected-${isCurrent + 1} levels--open`)
        } else if (where === "down" && isCurrent >= 1) {
            setSelected(`levels--selected-${isCurrent - 1} levels--open`)
            setCurrent(isCurrent - 1)
        } else {
            setCurrent(0)
            setCurrentContent("")
            setOpen(false)
            setSelected("")
        }
    }

    const openHandler = (index: string) => {
        if (contentItems.some((item) => item.dataSpace === index)) {
            setOpen(true)
            setCurrentContent(index)
        }
    }
    const closeHandler = () => {
        setCurrentContent("")
        setOpen(false)
    }

    const lvlOneHandler = (index: any) => {
        if (isCurrent != index) {
            setCurrent(index)

            setSelected(`levels--selected-${index} levels--open`)
        }
    }
    // ///////////////////////////////////////////

    return (
        <div>
            <Hidden></Hidden>
            {/* <!-- end icons --> */}
            <div className="map-container">
                <div className="map-main">
                    <header className="library-header">
                        <h1>Colby Libraries</h1>
                        <ul>
                            <li>
                                <a className="current-library" href="/">
                                    Miller
                                </a>
                            </li>
                        </ul>
                    </header>
                    <div className="legend">
                        <ul>
                            <li>
                                <strong>Key:</strong>
                            </li>
                            <li>
                                <span className="category4">&#9679;</span>Resources
                            </li>
                            <li>
                                <span className="category3">&#9679;</span>Lab/Study Areas
                            </li>
                            <li>
                                <span className="category2">&#9679;</span>classNamerooms
                            </li>
                            <li>
                                <span className="category1">&#9679;</span>Staff
                            </li>
                        </ul>
                    </div>
                    <div className={isOpen ? "building miller building--content-open" : "building miller"}>
                        <div className="surroundings">
                            <img className="surroundings__map" src="img/surroundings-miller.svg" alt="Surroundings" />
                        </div>
                        <div id="draggable-element">
                            <div className={`levels ${isSelected} `}>
                                <div
                                    className={isCurrent == 1 ? "level level--1 level--current" : "level level--1"}
                                    onClick={() => lvlOneHandler(1)}
                                    aria-label="Level 1"
                                >
                                    <Level1 />
                                    <div className={isCurrent == 1 ? "level__pins level__pins--active" : "level__pins "}>
                                        {FirstFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.dataSpace === isCurrentContent ? pin.aClass + " pin--active" : pin.aClass}
                                                onClick={() => {
                                                    openHandler(pin.dataSpace)
                                                }}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={isCurrent == 2 ? "level level--2 level--current" : "level level--2"}
                                    onClick={() => lvlOneHandler(2)}
                                    aria-label="Level 2"
                                >
                                    <Level2 />
                                    <div className={isCurrent == 2 ? "level__pins level__pins--active" : "level__pins "}>
                                        {SecondFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.dataSpace === isCurrentContent ? pin.aClass + " pin--active" : pin.aClass}
                                                onClick={() => {
                                                    openHandler(pin.dataSpace)
                                                }}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={isCurrent == 3 ? "level level--3 level--current" : "level level--3"}
                                    onClick={() => lvlOneHandler(3)}
                                    aria-label="Level 3"
                                >
                                    <Level3 />

                                    <div className={isCurrent == 3 ? "level__pins level__pins--active" : "level__pins "}>
                                        {ThirdFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.aClass}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    {/* <!-- /level__pins --> */}
                                </div>

                                <div
                                    className={isCurrent == 4 ? "level level--4 level--current" : "level level--4"}
                                    onClick={() => lvlOneHandler(4)}
                                    aria-label="Level 4"
                                >
                                    <Level4 />

                                    <div className={isCurrent == 4 ? "level__pins level__pins--active" : "level__pins "}>
                                        {ForthFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.aClass}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    {/* <!-- /level__pins --> */}
                                </div>

                                {/*  */}
                                <div
                                    className={isCurrent == 5 ? "level level--5 level--current" : "level level--5"}
                                    onClick={() => lvlOneHandler(5)}
                                    aria-label="Level 5"
                                >
                                    <Level4 />

                                    <div className={isCurrent == 5 ? "level__pins level__pins--active" : "level__pins "}>
                                        {ForthFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.aClass}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    {/* <!-- /level__pins --> */}
                                </div>
                                <div
                                    className={isCurrent == 6 ? "level level--6 level--current" : "level level--6"}
                                    onClick={() => lvlOneHandler(6)}
                                    aria-label="Level 6"
                                >
                                    <Level4 />

                                    <div className={isCurrent == 6 ? "level__pins level__pins--active" : "level__pins "}>
                                        {ForthFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.aClass}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    {/* <!-- /level__pins --> */}
                                </div>
                                <div
                                    className={isCurrent == 7 ? "level level--7 level--current" : "level level--7"}
                                    onClick={() => lvlOneHandler(7)}
                                    aria-label="Level 7"
                                >
                                    <Level4 />

                                    <div className={isCurrent == 7 ? "level__pins level__pins--active" : "level__pins "}>
                                        {ForthFloorPins.map((pin, index) => (
                                            <a
                                                key={index}
                                                onMouseEnter={handleHover}
                                                className={pin.aClass}
                                                data-category={pin.dataCategory}
                                                data-space={pin.dataSpace}
                                                href="#"
                                                aria-label={pin.arialabel}
                                            >
                                                <span className="pin__icon">
                                                    <svg className="icon icon--pin">
                                                        <use xlinkHref="#icon-pin"></use>
                                                    </svg>
                                                    <svg className={pin.svgClassName}>
                                                        <use xlinkHref={pin.xlinkHref}></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                    {/* <!-- /level__pins --> */}
                                </div>
                                {/*  */}
                            </div>
                        </div>
                        {/* <!-- /levels --> */}
                    </div>
                    {/* <!-- /building --> */}
                    <button className="boxbutton boxbutton--dark open-search" aria-label="Show search">
                        <svg className="icon icon--search">
                            <use xlinkHref="#icon-search"></use>
                        </svg>
                    </button>
                    <nav className={isSelected == "" ? `buildingnav buildingnav--hidden` : "buildingnav"}>
                        <button
                            onClick={() => {
                                handleUpDown("up")
                            }}
                            className={
                                isCurrent == levels || isOpen
                                    ? `boxbutton buildingnav__button--up boxbutton--disabled`
                                    : `boxbutton buildingnav__button--up`
                            }
                            aria-label="Go up"
                        >
                            <svg className="icon icon--angle-down">
                                <use xlinkHref="#icon-angle-up"></use>
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                handleUpDown("default")
                            }}
                            className="boxbutton boxbutton--dark buildingnav__button--all-levels"
                            aria-label="Back to all levels"
                        >
                            <svg className="icon icon--stack">
                                <use xlinkHref="#icon-stack"></use>
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                handleUpDown("down")
                            }}
                            className={
                                isCurrent == 1 || isOpen
                                    ? "boxbutton buildingnav__button--down boxbutton--disabled"
                                    : `boxbutton buildingnav__button--up`
                            }
                            aria-label="Go down"
                        >
                            <svg className="icon icon--angle-down">
                                <use xlinkHref="#icon-angle-down"></use>
                            </svg>
                        </button>
                    </nav>
                    <div className={isOpen ? "content content--open" : "content"}>
                        {contentItems.map((item, index) => (
                            <div
                                key={index}
                                className={isCurrentContent === item.dataSpace ? "content__item content__item--current" : "content__item "}
                                data-space={item.dataSpace}
                                data-category={item.dataCategory}
                            >
                                <h3 className="content__item-title">{item.title}</h3>
                                <h4>{item.role}</h4>
                                <div className="content__item-details">
                                    <p className="content__meta">
                                        <span className="content__meta-item">
                                            <strong>Office:</strong> {item.meta?.office}
                                        </span>
                                        <span className="content__meta-item">
                                            <strong>Hours:</strong> {item.meta?.hours}
                                        </span>
                                        <span className="content__meta-item">
                                            <strong>Phone:</strong> {item.meta?.phone}
                                        </span>
                                    </p>
                                    <p className="content__desc">
                                        <img src="img/profileF.jpg" alt="" /> {item.description}
                                        <br />
                                        <br />
                                        Publications: <a href="#">Click here</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                        <button
                            className={
                                isOpen
                                    ? "boxbutton boxbutton--dark content__button"
                                    : "boxbutton boxbutton--dark content__button content__button--hidden"
                            }
                            onClick={closeHandler}
                            aria-label="Close details"
                        >
                            <svg className="icon icon--cross">
                                <use xlinkHref="#icon-cross"></use>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- content --> */}
                </div>
                {/* <!-- /main --> */}

                <aside className="spaces-list" id="spaces-list">
                    <div className="search">
                        <input onChange={OnChangeHandler} className="search__input" placeholder="Search..." />
                        <button className="boxbutton boxbutton--darker close-search" aria-label="Close details">
                            <svg className="icon icon--cross">
                                <use xlinkHref="#icon-cross"></use>
                            </svg>
                        </button>
                    </div>
                    <span className="label">
                        <input id="sort-by-name" className="label__checkbox" type="checkbox" aria-label="Show alphabetically" />
                        <label className="label__text">A - Z</label>
                    </span>
                    <ul className="list grouped-by-category">
                        {listItems.map(
                            (index, key) =>
                                isCurrent === parseInt(index.dataLevel) &&
                                index.listLink.toLowerCase().includes(search.toLowerCase()) && (
                                    <li
                                        key={key}
                                        className="list__item"
                                        data-level={index.dataLevel}
                                        data-category={index.dataCategory}
                                        data-room={index.dataRoom}
                                        data-space={index.dataSpace}
                                    >
                                        <a
                                            href="#"
                                            className="list__link"
                                            onClick={() => {
                                                handleContentView(index.dataSpace.toString(), index.dataLevel)
                                            }}
                                        >
                                            {index.listLink}
                                        </a>
                                    </li>
                                )
                        )}

                        {listItems.map(
                            (index, key) =>
                                isCurrent === 0 &&
                                index.listLink.toLowerCase().includes(search.toLowerCase()) && (
                                    <li
                                        key={key}
                                        className="list__item"
                                        data-level={index.dataLevel}
                                        data-category={index.dataCategory}
                                        data-room={index.dataRoom}
                                        data-space={index.dataSpace}
                                    >
                                        <a
                                            href="#"
                                            className="list__link"
                                            onClick={() => {
                                                handleContentView(index.dataSpace.toString(), index.dataLevel)
                                            }}
                                        >
                                            {index.listLink}
                                        </a>
                                    </li>
                                )
                        )}
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default ThreeDObject
