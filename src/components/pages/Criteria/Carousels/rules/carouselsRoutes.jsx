import React from "react";
import { Route, Routes } from "react-router-dom";
import SuccessCarousel from "./Success/Carousel-arrowsSuccess";
import FailureCarousel from "./Failure/Carousel-arrowsFailure";
import CarousellabelingSuccess from "./Success/Carousel-labelingSuccess";
import CarousellabelingFailure from "./Failure/Carousel-labelingFailure";
import LiveCarouselsSuccess from "./Success/Live-carouselsSuccess";
import LiveCarouselsFailure from "./Failure/Live-carouselsFailure";
import CarouselPaginationSuccess from "./Success/Carousel-paginationSuccess";
import CarouselPaginationFailure from "./Failure/Carousel-paginationFailure";
import CarouselPausingSuccess from "./Success/Carousel-pausingSuccess";
import CarouselPausingFailure from "./Failure/Carousel-pausingFailure";

const CarouselRoutes = () => (
  <>
  <Route path="carousels/carousel-arrows_success" element={<SuccessCarousel />} />
  <Route path="carousels/carousel-arrows_failure" element={<FailureCarousel />} />
  <Route path="carousels/carousel-labeling_success" element={<CarousellabelingSuccess />} />
  <Route path="carousels/carousel-labeling_failure" element={<CarousellabelingFailure />} />
  <Route path="carousels/live-carousels_success" element={<LiveCarouselsSuccess />} />
  <Route path="carousels/live-carousels_failure" element={<LiveCarouselsFailure />} />
  <Route path="carousels/carousel-pagination_success" element={<CarouselPaginationSuccess />} />
  <Route path="carousels/carousel-pagination_failure" element={<CarouselPaginationFailure />} />
  <Route path="carousels/carousel-pausing_success" element={<CarouselPausingSuccess />} />
  <Route path="carousels/carousel-pausing_failure" element={<CarouselPausingFailure />} />
  </>
);

export default CarouselRoutes;
