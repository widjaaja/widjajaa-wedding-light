import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  Ref,
} from "react";
import classes from "./NavbarPages.module.scss";

interface NavbarPagesProps {
  onNavClick: (message: string) => void;
  activeNav: string;
  ref?: Ref<any>;
}

interface DraggableProps {
  innerRef: any;
  children: any;
  rootClass: string;
}

interface NavbarPagesState {
  name: string;
}

const NavbarPages: React.FC<NavbarPagesProps> = forwardRef(
  ({ onNavClick, activeNav }, ref) => {
    // Component implementation
    const dragRef = useRef<any>(null);
    const scrollRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      handleScroll(message: string, pos: string) {
        handleNavClick(message, pos);
      },
    }));

    const handleNavClick = (message: string, pos: string) => {
      const el = scrollRef.current;

      switch (pos) {
        case "left":
          el.scrollTo({
            left: el.scrollRight + 50,
            behavior: "smooth",
          });
          break;

        case "right":
          el.scrollTo({
            left: el.scrollLeft + 100,
            behavior: "smooth",
          });
          break;

        default:
          break;
      }
      onNavClick(message);
    };

    useEffect(() => {}, []);

    return (
      <Draggable innerRef={dragRef} rootClass={"drag"}>
        {/* <h1>NavbarPages</h1> */}
        <div ref={scrollRef} className={classes.NavThumbsContainer}>
          <div
            onClick={() => handleNavClick("wedding", "left")}
            className={`${classes.ItemNav} ${
              activeNav === "wedding" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-rings-wedding"></i>
            <span>Tasyakuran</span>
          </div>
          <div
            onClick={() => handleNavClick("brides", "left")}
            className={`${classes.ItemNav} ${
              activeNav === "brides" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-heart"></i>
            <span>Brides</span>
          </div>
          <div
            onClick={() => handleNavClick("event", "left")}
            className={`${classes.ItemNav} ${
              activeNav === "event" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-calendar-days"></i>
            <span>Event</span>
          </div>
          <div
            onClick={() => handleNavClick("location", "right")}
            className={`${classes.ItemNav} ${
              activeNav === "location" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-map-location-dot"></i>
            <span>Location</span>
          </div>
          <div
            onClick={() => handleNavClick("protocol", "right")}
            className={`${classes.ItemNav} ${
              activeNav === "protocol" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-shield-check"></i>
            <span>Protocol</span>
          </div>
          <div
            onClick={() => handleNavClick("gifts", "right")}
            className={`${classes.ItemNav} ${
              activeNav === "gifts" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-gifts"></i>
            <span>Gifts</span>
          </div>
          <div
            onClick={() => handleNavClick("wish", "right")}
            className={`${classes.ItemNav} ${
              activeNav === "wish" && classes.Selected
            }`}
          >
            <i className="fa-solid fa-comments"></i>
            <span>Wish</span>
          </div>
        </div>
      </Draggable>
    );
  }
);

const Draggable: React.FC<DraggableProps> = ({
  innerRef,
  rootClass = "",
  children,
}) => {
  const ourRef = useRef<any>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const handleDragStart = (e: any) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={classes.NavbarPagesContainer}
    >
      {children}
    </div>
  );
};

export default NavbarPages;
