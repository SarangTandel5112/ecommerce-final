"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/products.json";
import Link from "next/link";

import MenuItem from "@components/menu/MenuItem";
import ProductItem from "@components/products/ProductItem";

const ProductsSlider = ({
    items,
    title,
    description,
    button = {},
    slidesPerView,
    paddingTop = 0,
    bgType,
    itemType,
}: any) => {
    var moreType: any = "";

    if (slidesPerView == 3) {
        moreType = 2;
    }

    return (
        <>
            {/* short menu */}
            <section className={`sb-short-menu sb-p-${paddingTop}-90`}>
                {bgType == 2 ? (
                    <div className="sb-bg-1" style={{ marginTop: "-120px" }}>
                        <div></div>
                    </div>
                ) : (
                    <div className="sb-bg-2">
                        <div></div>
                    </div>
                )}
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2
                                className="sb-mb-30"
                                dangerouslySetInnerHTML={{
                                    __html: "Most popular products",
                                }}
                            />
                            <p
                                className="sb-text"
                                dangerouslySetInnerHTML={{
                                    __html: description
                                        ? description
                                        : Data.description,
                                }}
                            />
                        </div>
                        <div className="sb-right sb-mb-30">
                            {/* slider navigation */}
                            <div className="sb-slider-nav">
                                <div className="sb-prev-btn sb-short-menu-prev">
                                    <i className="fas fa-arrow-left"></i>
                                </div>
                                <div className="sb-next-btn sb-short-menu-next">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            {/* slider navigation end */}
                            {/* button */}
                            {button != 0 && (
                                <Link
                                    href={
                                        button.link
                                            ? button.link
                                            : Data.button.link
                                    }
                                    className="sb-btn"
                                >
                                    <span className="sb-icon">
                                        <img
                                            src="/img/ui/icons/cart.svg"
                                            alt="icon"
                                        />
                                    </span>
                                    <span>Shop now</span>
                                </Link>
                            )}
                            {/* button end */}
                        </div>
                    </div>

                    {slidesPerView == 4 ? (
                        <Swiper
                            {...SliderProps.shortMenuSlider4}
                            className={`swiper-container sb-short-menu-slider-4i`}
                        >
                            {items.slice(0, 8).map((item: any, key: any) => (
                                <SwiperSlide
                                    className="swiper-slide"
                                    key={`products-slider-item-${key}`}
                                >
                                    {itemType == "product" ? (
                                        <ProductItem
                                            item={item}
                                            index={key}
                                            marginBottom={0}
                                            moreType={moreType}
                                        />
                                    ) : (
                                        <MenuItem
                                            item={item}
                                            index={key}
                                            marginBottom={0}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            {...SliderProps.shortMenuSlider3}
                            className={`swiper-container sb-short-menu-slider-3i`}
                        >
                            {items.slice(0, 6).map((item: any, key: any) => (
                                <SwiperSlide
                                    className="swiper-slide"
                                    key={`products-slider-item-${key}`}
                                >
                                    {itemType == "product" ? (
                                        <ProductItem
                                            item={item}
                                            index={key}
                                            marginBottom={0}
                                            moreType={moreType}
                                        />
                                    ) : (
                                        <MenuItem
                                            item={item}
                                            index={key}
                                            marginBottom={0}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>
            {/* short menu end */}
        </>
    );
};
export default ProductsSlider;
