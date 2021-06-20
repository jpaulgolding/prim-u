/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  CarrouselCard,
  ReviewText,
  Stars,
  TitleReviewWrapper,
} from "./reviews.styles";

import Carousel from "../carousel/carousel";

const Reviews = ({ data }) => {

  return (
    <GlobalSection px={[0, 40, 40, 0]} pt={[20, 60, 80]}>
      <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </GlobalTitle>

      <Carousel>
        {data.map((r) => {
          const {
            fields: { name, rating, review },
          } = r;
          return (
            <CarrouselCard key={name} mb={[60, 40]}>
              <TitleReviewWrapper pt={[20]} pl={[20]}>
                <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                  {name}
                </GlobalSubtitle>
                <Stars>
                  {[...Array(rating)].map((element, index) => (
                    <Image
                      key={index}
                      src="/Star.svg"
                      width={20}
                      height={20}
                      layout="fixed"
                      quality={100}
                    />
                  ))}
                </Stars>
              </TitleReviewWrapper>

              <ReviewText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
                {review.content[0].content[0].value}
              </ReviewText>
            </CarrouselCard>
          );
        })}
<<<<<<< HEAD
      </CarrouselCards>
      <AngleContainer>
        <Angle
          classname="prev"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: -100,
              behavior: "smooth",
            })
          }
          disabled={percent === 0}>
          <Image src="/LeftAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
        <Angle
          className="next"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: 100,
              behavior: "smooth",
            })
          }
          disabled={percent >= 1}>
          <Image src="/RightAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
      </AngleContainer>
=======
      </Carousel>
>>>>>>> 3cdcd7c75ba6945108ad9a750c297ab9f24f32ba
    </GlobalSection>
  );
};

export default Reviews;
