import React, { useEffect } from "react";
import "../index.css";

const BusAnimation = () => {
    useEffect(() => {
        // Définition de l'utilitaire WOW
        const Util = function () {};

        Util.prototype.extend = function (custom, defaults) {
            for (let key in custom) {
                if (custom[key] != null) {
                    defaults[key] = custom[key];
                }
            }
            return defaults;
        };

        Util.prototype.isMobile = function (agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                agent
            );
        };

        // Définition de l'objet WOW
        const WOW = function (options) {
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: true,
            };

            if (options == null) options = {};

            this.scrollCallback = this.scrollCallback.bind(this);
            this.scrollHandler = this.scrollHandler.bind(this);
            this.start = this.start.bind(this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
        };

        // Méthodes de WOW
        WOW.prototype.init = function () {
            this.element = window.document.documentElement;
            if (
                document.readyState === "interactive" ||
                document.readyState === "complete"
            ) {
                return this.start();
            } else {
                return document.addEventListener(
                    "DOMContentLoaded",
                    this.start
                );
            }
        };

        WOW.prototype.start = function () {
            this.boxes = this.element.getElementsByClassName(
                this.config.boxClass
            );
            if (this.boxes.length) {
                if (this.disabled()) {
                    return this.resetStyle();
                } else {
                    for (let i = 0; i < this.boxes.length; i++) {
                        this.applyStyle(this.boxes[i], true);
                    }
                    window.addEventListener(
                        "scroll",
                        this.scrollHandler,
                        false
                    );
                    window.addEventListener(
                        "resize",
                        this.scrollHandler,
                        false
                    );
                    return (this.interval = setInterval(
                        this.scrollCallback,
                        50
                    ));
                }
            }
        };

        WOW.prototype.stop = function () {
            window.removeEventListener("scroll", this.scrollHandler, false);
            window.removeEventListener("resize", this.scrollHandler, false);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };

        WOW.prototype.show = function (box) {
            this.applyStyle(box);
            return (box.className =
                box.className + " " + this.config.animateClass);
        };

        WOW.prototype.applyStyle = function (box, hidden) {
            const duration = box.getAttribute("data-wow-duration");
            const delay = box.getAttribute("data-wow-delay");
            const iteration = box.getAttribute("data-wow-iteration");
            return box.setAttribute(
                "style",
                this.customStyle(hidden, duration, delay, iteration)
            );
        };

        WOW.prototype.resetStyle = function () {
            for (let i = 0; i < this.boxes.length; i++) {
                this.boxes[i].setAttribute("style", "visibility: visible;");
            }
        };

        WOW.prototype.customStyle = function (
            hidden,
            duration,
            delay,
            iteration
        ) {
            let style;
            style = hidden
                ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;"
                : "visibility: visible;";
            if (duration) {
                style += `-webkit-animation-duration: ${duration}; -moz-animation-duration: ${duration}; animation-duration: ${duration};`;
            }
            if (delay) {
                style += `-webkit-animation-delay: ${delay}; -moz-animation-delay: ${delay}; animation-delay: ${delay};`;
            }
            if (iteration) {
                style += `-webkit-animation-iteration-count: ${iteration}; -moz-animation-iteration-count: ${iteration}; animation-iteration-count: ${iteration};`;
            }
            return style;
        };

        WOW.prototype.scrollHandler = function () {
            return (this.scrolled = true);
        };

        WOW.prototype.scrollCallback = function () {
            if (this.scrolled) {
                this.scrolled = false;
                const results = [];
                for (let i = 0; i < this.boxes.length; i++) {
                    const box = this.boxes[i];
                    if (!box) continue;

                    if (this.isVisible(box)) {
                        this.show(box);
                        continue;
                    }
                    results.push(box);
                }
                this.boxes = results;
                if (!this.boxes.length) {
                    return this.stop();
                }
            }
        };

        WOW.prototype.offsetTop = function (element) {
            let top = element.offsetTop;
            while ((element = element.offsetParent)) {
                top += element.offsetTop;
            }
            return top;
        };

        WOW.prototype.isVisible = function (box) {
            const offset =
                box.getAttribute("data-wow-offset") || this.config.offset;
            const viewTop = window.pageYOffset;
            const viewBottom = viewTop + this.element.clientHeight - offset;
            const top = this.offsetTop(box);
            const bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };

        WOW.prototype.util = function () {
            return this._util || (this._util = new Util());
        };

        WOW.prototype.disabled = function () {
            return (
                !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
        };

        // Initialiser WOW
        const wow = new WOW({
            animateClass: "animated",
            offset: 100,
        });

        wow.init();

        // Nettoyage lors du démontage du composant
        return () => {
            if (wow.interval) {
                clearInterval(wow.interval);
            }
            window.removeEventListener("scroll", wow.scrollHandler);
            window.removeEventListener("resize", wow.scrollHandler);
        };
    }, []);

    return (
        <div className="h-screen bg-gray-900 flex flex-col items-center">
            <h2
                className="wow fadeInUp text-white text-3xl font-bold mt-16 mb-96"
                data-wow-duration="1s"
            >
                C'est parti !
            </h2>

            <div className="relative h-64 w-full">
                <img
                    src="../public/bus.svg"
                    className="wow fadeInLeft absolute"
                    data-wow-duration="2s"
                    data-wow-offset="100"
                    alt="Bus"
                />
            </div>
        </div>
    );
};

export default BusAnimation;
