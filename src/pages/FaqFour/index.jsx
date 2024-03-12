import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button, Input } from "../../components";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function FaqFourPage() {
  return (
    <>
      <Helmet>
        <title>matrix</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900_02">
        <div className="overflow-auto">
          <div className="h-[2355px] relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-end">
                <div className="self-stretch h-[588px] pt-[27px] sm:pt-5 z-[1] relative">
                  <div className="flex flex-col w-full bottom-0 right-0 left-0 m-auto absolute">
                    <Img
                      src="images/img_logo_savior_red.png"
                      alt="logosaviorred"
                      className="w-[7%] ml-[88px] z-[1] object-cover relative"
                    />
                    <Img src="images/img_rectangle_18.png" alt="image" className="h-[588px] mt-[-46px] object-cover" />
                  </div>
                  <Text
                    size="7xl"
                    as="p"
                    className="w-[83%] bottom-[35%] right-0 left-0 m-auto !text-gray-100 !font-shojumaru text-center absolute"
                  >
                    Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
                  </Text>
                  <header className="flex justify-center items-center w-[86%] right-[6%] top-[8%] m-auto absolute">
                    <Text size="4xl" as="p" className="text-center">
                      Saviour
                    </Text>
                    <div className="flex md:flex-col justify-center items-end ml-[177px] p-3.5 bg-gray-900 rounded-[20px]">
                      <a href="#" className="mt-0.5">
                        <Text as="p" className="text-center">
                          Home
                        </Text>
                      </a>
                      <a href="#" className="ml-6">
                        <Text as="p" className="text-center">
                          IDO
                        </Text>
                      </a>
                      <a href="#" className="ml-[22px]">
                        <Text as="p" className="text-center">
                          Tokenomics
                        </Text>
                      </a>
                      <a href="#" className="ml-6">
                        <Text as="p" className="text-center">
                          Roadmap
                        </Text>
                      </a>
                      <a href="#" className="ml-6">
                        <Text as="p" className="text-center">
                          Coming Soon
                        </Text>
                      </a>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px] ml-3" />
                    </div>
                    <Button
                      size="xs"
                      variant="gradient"
                      color="red_A400_02_red_500"
                      className="w-full ml-[215px] font-poppins font-semibold flex-1 rounded-[15px]"
                    >
                      Connect Wallet
                    </Button>
                  </header>
                </div>
                <div className="flex md:flex-col justify-end items-start w-[89%] md:w-full mt-[-77px]">
                  <Text size="6xl" as="p" className="mt-[161px] !text-red-A400_02 !font-shojumaru z-[1]">
                    Introduction
                  </Text>
                  <div className="flex md:flex-col justify-end items-start ml-[-374px] flex-1">
                    <Text
                      size="2xl"
                      as="p"
                      className="flex w-[43%] md:w-full mt-[242px] !text-white-A700 leading-[119%]"
                    >
                      <span className="text-white-A700">
                        <>
                          We&#39;ve all been in the mud once, and now we&#39;ve decided to fight it out. <br />
                          Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the
                          blockchain. Save the lucky ones alive, join us to save the future! <br />
                          Our mission is to empower everyone to share wealth and succeed. <br />
                        </>
                      </span>
                      <span className="text-white_A700_96">
                        <>
                          read more...
                          <br />
                          <br />
                        </>
                      </span>
                    </Text>
                    <Img
                      src="images/img_brick_matrix_ge.png"
                      alt="brickmatrixge"
                      className="w-[57%] md:w-full ml-[-30px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[1145px] mt-[-96px] z-[1] relative">
                <Img
                  src="images/img_rectangle_19.png"
                  alt="image_one"
                  className="justify-center h-[1145px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.71 object-cover absolute"
                />
                <div className="flex flex-col items-center w-[38%] gap-8 bottom-[13%] left-[5%] m-auto absolute">
                  <Button
                    size="xs"
                    variant="gradient"
                    color="pink_600_orange_800"
                    className="min-w-[138px] rounded-[16px]"
                  >
                    Connect Wallet
                  </Button>
                  <Text size="3xl" as="p" className="!text-red-A400_01 !font-shojumaru text-center">
                    Become an affiliate & Earn 7% as Commission!
                  </Text>
                  <div className="flex sm:flex-col justify-end items-start w-[93%] md:w-full gap-2">
                    <Input
                      shape="round"
                      name="generate"
                      placeholder="Generate a unique referral link"
                      className="gap-[35px] flex-1"
                    />
                    <Img
                      src="images/img_fluent_copy_16_filled.svg"
                      alt="fluentcopysixte"
                      className="h-[34px] w-[34px] mt-1.5"
                    />
                  </div>
                </div>
                <Text
                  as="p"
                  className="w-[38%] left-[5%] top-[15%] m-auto !text-gray-300_01 text-center !text-[20.92px] leading-[174.5%] absolute"
                >
                  During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower
                  everyone to share wealth and achieve success.
                </Text>
                <div className="flex flex-col items-center w-[30%] left-[10%] top-[27%] m-auto absolute">
                  <Button
                    color="red_A400_01"
                    size="lg"
                    shape="round"
                    className="sm:px-5 font-shojumaru z-[1] min-w-[244px]"
                  >
                    Token Info
                  </Button>
                  <div className="self-stretch mt-[-27px] p-[27px] sm:p-5 border border-solid deep_orange_700_red_A700_border bg-black-900_72 rounded-[20px]">
                    <div className="flex flex-col items-center mt-9 gap-[25px]">
                      <div className="flex flex-col w-full gap-6 mx-auto md:p-5 max-w-[278px]">
                        <div className="flex items-start w-[82%] md:w-full gap-[13px]">
                          <Text as="p" className="w-[82%]">
                            Total Token Supply
                          </Text>
                          <Text as="p" className="!text-deep_orange-A700">
                            20%
                          </Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p" className="self-end mt-0.5">
                            Soft Cap
                          </Text>
                          <Text as="p" className="self-start !text-deep_orange-A700">
                            200 BNB
                          </Text>
                        </div>
                        <div className="flex justify-between items-start w-[88%] md:w-full gap-5">
                          <Text as="p" className="w-[63%]">
                            <>
                              Initial exchange
                              <br />
                              rate
                            </>
                          </Text>
                          <Text as="p" className="!text-deep_orange-A700">
                            1 BNB
                          </Text>
                        </div>
                      </div>
                      <Text as="p">Recommended Referral Commission</Text>
                      <div className="flex flex-col w-full gap-6 mx-auto md:p-5 max-w-[216px]">
                        <div className="flex justify-between gap-5">
                          <Text as="p" className="self-end">
                            1st Generation
                          </Text>
                          <Text as="p" className="self-start !text-deep_orange-A700">
                            5%
                          </Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p" className="self-end">
                            2nd Generation
                          </Text>
                          <Text as="p" className="self-start !text-deep_orange-A700">
                            2%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[51%] h-max mr-[127px] right-[8%] bottom-0 top-0 my-auto absolute">
                  <div className="flex justify-center items-center w-[37%] md:w-full gap-2.5 z-[1]">
                    <div className="flex justify-center gap-1.5 flex-1">
                      <Button className="w-full font-robotomono font-bold border-red-A400_01 border border-solid rounded-[3px]">
                        0
                      </Button>
                      <Button className="w-full font-robotomono font-bold border-red-A400_01 border border-solid rounded-[3px]">
                        0
                      </Button>
                    </div>
                    <Heading
                      size="lg"
                      as="h1"
                      className="self-end !text-red-A400_01 !font-robotomono text-center !text-[64.69px]"
                    >
                      :
                    </Heading>
                    <div className="flex justify-center gap-1.5 flex-1">
                      <Button className="w-full font-robotomono font-bold border-red-A400_01 border border-solid rounded-[3px]">
                        0
                      </Button>
                      <Button className="w-full font-robotomono font-bold border-red-A400_01 border border-solid rounded-[3px]">
                        0
                      </Button>
                    </div>
                  </div>
                  <div className="self-stretch mt-[-37px]">
                    <div className="p-[39px] sm:p-5 border border-solid deep_orange_700_red_A700_border bg-black-900_72 rounded-[20px]">
                      <div className="flex flex-col items-center w-full mt-8 gap-[38px] mx-auto md:p-5 max-w-[468px]">
                        <Text size="8xl" as="p" className="!text-red-A400_01 !font-shojumaru">
                          PRESALE 1
                        </Text>
                        <div className="flex flex-col gap-[39px]">
                          <Text size="4xl" as="p" className="!text-gray-200">
                            1 Saviour = 0.657 USDT
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-200_01">
                            Next Stage Price = 0.723 USDT
                          </Text>
                        </div>
                        <Text size="2xl" as="p" className="!text-gray-200_01">
                          Sold - $34,56,56,764/$50,00,00,000
                        </Text>
                        <div className="flex flex-col self-stretch items-center">
                          <Text size="2xl" as="p" className="!text-gray-200_01">
                            Raised - $34,56,56,764/$40,00,00,000
                          </Text>
                          <Input
                            shape="round"
                            name="amount"
                            placeholder="Enter the amount (BNB)"
                            className="self-stretch mt-[38px] sm:pr-5"
                          />
                          <Input
                            shape="round"
                            name="groupeighty"
                            placeholder="Minimum Quantity to Buy"
                            className="self-stretch mt-[19px] sm:pr-5"
                          />
                          <Input
                            shape="round"
                            name="groupseventysix"
                            placeholder="Maximum Quantity of Tokens"
                            className="self-stretch mt-[19px] sm:pr-5"
                          />
                          <div className="flex justify-between w-[51%] md:w-full mt-10 gap-5">
                            <Button
                              size="sm"
                              variant="gradient"
                              shape="round"
                              color="pink_600_orange_800"
                              className="sm:px-5 min-w-[73px] !rounded-[21px]"
                            >
                              Buy
                            </Button>
                            <Button
                              size="sm"
                              variant="gradient"
                              shape="round"
                              color="pink_600_orange_800"
                              className="sm:px-5 min-w-[131px] !rounded-[21px]"
                            >
                              Claim Drop
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              size="md"
              variant="gradient"
              shape="round"
              color="pink_600_orange_800"
              rightIcon={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
              className="gap-[11px] left-[11%] top-[45%] m-auto sm:px-5 min-w-[178px] absolute !rounded-[21px]"
            >
              Documents
            </Button>
            <Text
              size="5xl"
              as="p"
              className="w-max bottom-[44%] right-0 left-0 m-auto !text-red-A400_01 !font-shojumaru text-center !text-[40.92px] absolute"
            >
              Participate in our IDO Event!
            </Text>
          </div>
          <div className="h-[706px] relative">
            <Img
              src="images/img_rectangle_20.png"
              alt="image_two"
              className="justify-center h-[706px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.71 object-cover absolute"
            />
            <div className="flex flex-col w-[63%] gap-[102px] right-[2%] top-[8%] m-auto absolute">
              <Text size="6xl" as="p" className="ml-[49px] !text-red-A400_02 !font-shojumaru">
                Tokenomics
              </Text>
              <div className="h-[375px] relative">
                <Img
                  src="images/img_logo_savior_red.png"
                  alt="logosaviorred"
                  className="h-[307px] w-[29%] bottom-0 right-0 left-0 m-auto object-cover absolute"
                />
                <div className="w-full top-0 right-0 left-0 m-auto absolute">
                  <div className="h-[351px] relative">
                    <div className="flex flex-col items-end w-[98%] top-0 right-0 left-0 m-auto absolute">
                      <div className="flex justify-end w-[40%] md:w-full mr-[41px] z-[1]">
                        <div className="w-full">
                          <div className="flex justify-end items-start gap-[13px]">
                            <div className="flex justify-end w-[21%] mt-3">
                              <div className="flex flex-col w-full">
                                <Img src="images/img_vector.svg" alt="vector_one" className="h-[27px] z-[1]" />
                                <Img
                                  src="images/defaultNoData.png"
                                  alt="vector_three"
                                  className="h-[18px] mt-[-18px]"
                                />
                              </div>
                            </div>
                            <Text size="s" as="p" className="!text-gray-100_03 !font-shojumaru">
                              Community Airdrop (7.5%)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col self-stretch justify-end items-start mt-[-23px]">
                        <div className="flex flex-col z-[1] flex-1">
                          <div className="flex w-[52%] md:w-full ml-[134px] z-[1]">
                            <div className="w-full">
                              <div className="flex items-start gap-[18px]">
                                <Text size="s" as="p" className="!text-gray-100_03 !font-shojumaru text-right">
                                  IDO Round(20%)
                                </Text>
                                <div className="flex w-[32%] mt-[13px]">
                                  <div className="flex flex-col items-end w-full">
                                    <Img
                                      src="images/img_vector.svg"
                                      alt="vector_five"
                                      className="self-stretch h-[24px] z-[1]"
                                    />
                                    <Img
                                      src="images/defaultNoData.png"
                                      alt="vector_seven"
                                      className="h-[16px] mt-[-16px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end mt-[-25px]">
                            <Img
                              src="images/img_vector_red_700.svg"
                              alt="vector_nine"
                              className="h-[104px] mr-[150px] z-[1]"
                            />
                            <div className="flex flex-col self-stretch mt-[-11px]">
                              <div className="flex items-start w-[58%] md:w-full ml-0.5 z-[1]">
                                <div className="mt-8 z-[1] flex-1">
                                  <div>
                                    <div className="flex items-center gap-3">
                                      <Text size="s" as="p" className="!text-gray-100_03 !font-shojumaru text-right">
                                        Ecological Fund (5%)
                                      </Text>
                                      <div className="flex flex-col self-end items-end w-[29%]">
                                        <div className="self-stretch h-[2px] w-full z-[1] bg-gray-100_02" />
                                        <Img
                                          src="images/defaultNoData.png"
                                          alt="vector_thirteen"
                                          className="h-px mt-[-1px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_vector_pink_600_01.svg"
                                  alt="vector_fifteen"
                                  className="h-[92px]"
                                />
                              </div>
                              <div className="flex md:flex-col items-center mt-[-70px]">
                                <div className="self-end z-[1] flex-1">
                                  <div>
                                    <div className="flex items-start gap-1.5">
                                      <Text
                                        size="s"
                                        as="p"
                                        className="w-[76%] mt-[5px] !text-gray-100_03 !font-shojumaru"
                                      >
                                        Initial Liquidity Provider (15%)
                                      </Text>
                                      <div className="flex w-[24%]">
                                        <div className="flex flex-col items-end w-full">
                                          <Img src="images/defaultNoData.png" alt="vector" className="h-[11px]" />
                                          <Img
                                            src="images/img_vector.svg"
                                            alt="vector_nineteen"
                                            className="self-stretch h-[17px] mt-[-11px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center w-[46%] md:w-full ml-[-24px]">
                                  <Img
                                    src="images/img_vector_pink_900.svg"
                                    alt="vector"
                                    className="self-end h-[99px]"
                                  />
                                  <Img
                                    src="images/img_vector_pink_900_01.svg"
                                    alt="vector"
                                    className="h-[185px] ml-[-15px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-start w-[37%] md:w-full mt-[57px] ml-[-65px]">
                          <Img src="images/img_vector_red_900_02.svg" alt="vector" className="h-[78px]" />
                          <div className="mt-[5px] ml-[-14px] flex-1">
                            <div>
                              <div className="flex justify-end items-start gap-3">
                                <div className="h-[14px] w-[28%] mt-3 relative">
                                  <Img
                                    src="images/defaultNoData.png"
                                    alt="vector"
                                    className="h-[9px] bottom-[1%] left-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_vector.svg"
                                    alt="vector"
                                    className="justify-center h-[14px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                </div>
                                <Text size="s" as="p" className="mb-[5px] !text-gray-100_03 !font-shojumaru">
                                  Team Founders (2.5%)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_gray_500.svg"
                      alt="vector"
                      className="h-[65px] right-[38%] top-[9%] m-auto absolute"
                    />
                    <div className="flex justify-end w-[40%] bottom-0 right-0 m-auto absolute">
                      <div className="w-full">
                        <div className="flex sm:flex-col justify-end items-start gap-[13px]">
                          <div className="flex justify-end w-[21%] sm:w-full">
                            <div className="flex flex-col w-full">
                              <Img src="images/defaultNoData.png" alt="vector" className="h-[16px]" />
                              <Img src="images/img_vector.svg" alt="vector" className="h-[24px] mt-[-16px]" />
                            </div>
                          </div>
                          <Text
                            size="s"
                            as="p"
                            className="w-[79%] sm:w-full mt-[7px] !text-gray-100_03 !font-shojumaru"
                          >
                            Black Hole Contract Address (50%)
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[29%] bottom-[22%] left-[6%] m-auto absolute">
              <Button
                color="red_A400_01"
                size="lg"
                shape="round"
                className="sm:px-5 font-shojumaru z-[1] min-w-[244px]"
              >
                Token Details
              </Button>
              <div className="self-stretch mt-[-29px] p-12 md:p-5 border border-solid deep_orange_700_red_A700_border bg-black-900_72 rounded-[20px]">
                <div className="flex flex-col mt-[21px] mb-[9px] gap-[29px]">
                  <div className="flex justify-between w-full gap-5 mx-auto md:p-5 max-w-[265px]">
                    <Text as="p" className="self-end mt-0.5">
                      Name
                    </Text>
                    <Text as="p" className="self-start !text-deep_orange-A700">
                      Saviour
                    </Text>
                  </div>
                  <div className="flex justify-between w-full gap-5 mx-auto md:p-5 max-w-[233px]">
                    <Text as="p" className="self-end mt-0.5">
                      Symbol
                    </Text>
                    <Text as="p" className="self-start !text-deep_orange-A700">
                      SVR
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <Text as="p" className="self-end mt-0.5">
                      Total Supply
                    </Text>
                    <Text as="p" className="self-start !text-deep_orange-A700">
                      1000 Trillion
                    </Text>
                  </div>
                  <div className="flex justify-between w-full gap-5 mx-auto md:p-5 max-w-[211px]">
                    <Text as="p" className="self-end mt-0.5">
                      Decimals
                    </Text>
                    <Text as="p" className="self-start !text-deep_orange-A700">
                      18
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[716px] relative">
              <Img
                src="images/img_rectangle_21.png"
                alt="image_three"
                className="justify-center h-[716px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.71 object-cover absolute"
              />
              <div className="flex flex-col items-center w-[77%] gap-[107px] top-[8%] right-0 left-0 m-auto absolute">
                <Text size="6xl" as="p" className="!text-red-A400_02 !font-shojumaru">
                  Road Map
                </Text>
                <div className="flex md:flex-col gap-[67px]">
                  <div className="h-[351px] w-full bg-gradient5 relative rounded-[13px]">
                    <div className="justify-center h-[346px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_03 absolute rounded-[13px]" />
                    <div className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_card_1_png.png"
                        alt="phase_one_one"
                        className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[17px]"
                      />
                      <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-4 m-auto bg-gradient4 absolute rounded-[13px]">
                        <div className="flex flex-col w-full mt-[183px] mb-[5px] pt-0.5 gap-4 mx-auto md:p-5 max-w-[196px]">
                          <a href="#">
                            <Heading size="s" as="h2" className="!font-inter !text-[21.95px]">
                              Phase 1
                            </Heading>
                          </a>
                          <a href="#">
                            <Text size="md" as="p" className="!text-blue_gray-200 !font-manrope !text-[17.56px]">
                              Technical Readiness and Smart Contract Audit
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[351px] w-full bg-gradient5 relative rounded-[13px]">
                    <div className="justify-center h-[346px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_03 absolute rounded-[13px]" />
                    <div className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_card_1_png_349x237.png"
                        alt="card1png_one"
                        className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[17px]"
                      />
                      <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[22px] m-auto sm:p-5 bg-gradient4 absolute rounded-[13px]">
                        <div className="flex flex-col w-full mt-[205px] pt-0.5 gap-4 mx-auto md:p-5 max-w-[176px]">
                          <a href="#">
                            <Heading size="s" as="h3" className="!font-inter !text-[21.95px]">
                              Phase 2
                            </Heading>
                          </a>
                          <a href="#">
                            <Text size="md" as="p" className="!text-blue_gray-200_01 !font-manrope !text-[17.56px]">
                              Increase Liquidity and Trading Volume
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[351px] w-full bg-gradient5 relative rounded-[13px]">
                    <div className="justify-center h-[346px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_03 absolute rounded-[13px]" />
                    <div className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_card_1_png_1.png"
                        alt="card1png_one"
                        className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[17px]"
                      />
                      <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient4 absolute rounded-[13px]">
                        <div className="flex flex-col w-full mt-[212px] mb-[7px] pt-0.5 gap-4 mx-auto md:p-5 max-w-[198px]">
                          <a href="#">
                            <Heading size="s" as="h4" className="!font-inter !text-[21.95px]">
                              Phase 3
                            </Heading>
                          </a>
                          <a href="#">
                            <Text size="md" as="p" className="!text-blue_gray-200_01 !font-manrope !text-[17.56px]">
                              Community Building and Marketing
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[351px] w-full bg-gradient5 relative rounded-[13px]">
                    <div className="justify-center h-[346px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_03 absolute rounded-[13px]" />
                    <div className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_card_1_png_2.png"
                        alt="card1png_one"
                        className="justify-center h-[349px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[17px]"
                      />
                      <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-gradient4 absolute rounded-[13px]">
                        <div className="flex flex-col w-full mt-[209px] mb-1 pt-0.5 gap-4 mx-auto md:p-5 max-w-[195px]">
                          <a href="#">
                            <Heading size="s" as="h5" className="!font-inter !text-[21.95px]">
                              Phase 4
                            </Heading>
                          </a>
                          <a href="#">
                            <Text size="md" as="p" className="!text-blue_gray-200_01 !font-manrope !text-[17.56px]">
                              Ecosystem Expansion and Partnerships
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start w-full mt-[62px] gap-5 mx-auto md:p-5 max-w-[1237px]">
            <Img src="images/img_image_1.png" alt="imageone_one" className="w-[503px] mt-[46px] object-cover" />
            <div className="flex flex-col items-center w-[52%] md:w-full gap-[58px]">
              <Text size="6xl" as="p" className="!text-red-A400_02 !font-shojumaru">
                FAQ
              </Text>
              <Accordion preExpanded={[0]} className="flex flex-col self-stretch gap-4">
                {[...Array(4)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelisto${i}`}>
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="flex-1">
                                <div className="flex sm:flex-col justify-between items-center gap-5 p-6 sm:p-5 border-red-A400_01 border border-solid bg-black-900 rounded-[20px]">
                                  <div className="flex justify-between items-center w-[65%] sm:w-full ml-[15px] gap-5">
                                    <Text size="lg" as="p" className="!font-shojumaru">
                                      1
                                    </Text>
                                    <Text as="p" className="!font-shojumaru">
                                      Why choose &quot;Savior&quot;?
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <footer className="flex justify-center items-center mt-[211px] p-[38px] sm:p-5 bg-gradient3">
            <div className="flex flex-col items-center justify-center w-[43%] mt-[25px]">
              <div className="flex justify-center w-[32%] md:w-full">
                <Img
                  src="images/img_logo_savior_red.png"
                  alt="logosaviorred"
                  className="h-[163px] w-full object-cover"
                />
              </div>
              <Heading
                size="md"
                as="h4"
                className="mt-[19px] !text-transparent tracking-[1.71px] uppercase bg-gradient2 bg-clip-text"
              >
                SITEMAP
              </Heading>
              <ul className="flex sm:flex-col self-stretch justify-between mt-[18px] gap-5">
                <li>
                  <a href="#" className="self-start">
                    <Heading as="p" className="!text-[12.82px]">
                      Home
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading as="p" className="!text-[12.82px]">
                      IDO
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading as="p" className="!text-[12.82px]">
                      Tokenomics
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading as="p" className="!text-[12.82px]">
                      Road Map
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading as="p" className="!text-[12.82px]">
                      Whitepaper
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading as="p" className="!text-[12.82px]">
                      Pledge
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading as="p" className="!text-[12.82px]">
                      NFT
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading as="p" className="!text-[12.82px]">
                      Games
                    </Heading>
                  </a>
                </li>
              </ul>
              <div className="flex justify-end w-[51%] md:w-full mt-[39px]">
                <div className="w-full">
                  <div>
                    <div className="flex items-center">
                      <div className="w-[10%]">
                        <Img
                          src="images/img_icon_twitter_6b.svg"
                          alt="icontwitter6b"
                          className="h-[27px] w-full md:w-[27px]"
                        />
                      </div>
                      <Img
                        src="images/img_icon_telegram_3.svg"
                        alt="icontelegramthr"
                        className="h-[27px] w-[27px] ml-[13px]"
                      />
                      <Img
                        src="images/img_clarity_email_solid.svg"
                        alt="clarityemail"
                        className="self-start h-[24px] w-[24px] ml-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
