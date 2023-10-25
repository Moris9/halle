import {Helmet} from "react-helmet";
import Worker from "../assets/images/worker.jpg"
import AppLayout from "../layouts/AppLayout.jsx";
import SerchIcon from "../assets/search.svg"
import InputField from "../components/fields/InputField.jsx";
import Header from "../components/Header.jsx";
function Services() {
    return (
        <>
            <Helmet>
                <title>تاسیسات</title>
            </Helmet>
          <AppLayout>
              <div className="self-stretch flex w-full flex-col max-md:max-w-full">
                 <Header/>
                  <div className="self-center z-[1] mt-0 w-full max-w-[1507px] max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                              <div className="bg-zinc-50 z-[1] flex mr-0 flex-col mt-[2980px] pt-11 pb-16 px-5 rounded-xl max-md:max-w-full max-md:mt-10">
                                  <img
                                      loading="lazy"
                                      srcSet="..."
                                      className="aspect-square object-cover object-center w-[72px] overflow-hidden self-center max-w-full rounded-[50%]"
                                  />
                                  <div className="text-neutral-500 text-center text-base font-semibold self-center mt-6">
                                      Albert Cole
                                  </div>
                                  <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-3.5">
                                      Designer
                                  </div>
                                  <div className="text-neutral-500 text-center text-sm font-semibold max-w-[393px] self-center mt-9">
                                      “ I believe in lifelong learning and Skola is a great place to
                                      learn
                                      <br />
                                      from experts. I’ve learned a lot and recommend it to all my
                                      <br />
                                      friends “
                                  </div>
                              </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="bg-white flex grow pr-0 pl-0 flex-col w-full mx-auto pt-8 pb-6 rounded-xl max-md:max-w-full">
                                  <div className="self-stretch flex w-full flex-col max-md:max-w-full">
                                      <div className="self-center flex w-full max-w-[1169px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                                          <div className="bg-blue-700 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <img
                                                  loading="lazy"
                                                  srcSet="..."
                                                  className="aspect-square object-cover object-center w-[35px] fill-white overflow-hidden self-center max-w-full"
                                              />
                                              <div className="text-white text-center text-sm font-semibold self-center mt-9">
                                                  Restaurant
                                              </div>
                                          </div>
                                          <div className="bg-zinc-100 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <img
                                                  loading="lazy"
                                                  srcSet="..."
                                                  className="aspect-square object-cover object-center w-[35px] fill-blue-600 overflow-hidden self-center max-w-full"
                                              />
                                              <div className="text-black text-center text-sm font-semibold self-center mt-8">
                                                  Shopping
                                              </div>
                                          </div>
                                          <div className="bg-zinc-100 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <img
                                                  loading="lazy"
                                                  srcSet="..."
                                                  className="aspect-[1.2] object-cover object-center w-[42px] fill-indigo-500 overflow-hidden self-center max-w-full"
                                              />
                                              <div className="text-black text-center text-sm font-semibold mt-8 max-md:ml-2">
                                                  Outdoor Activities
                                              </div>
                                          </div>
                                          <div className="bg-zinc-100 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <div className="self-center flex w-[42px] max-w-full flex-col">
                                                  <img
                                                      loading="lazy"
                                                      srcSet="..."
                                                      className="aspect-square object-cover object-center w-full fill-blue-600 overflow-hidden"
                                                  />
                                                  <div className="text-black text-center text-sm font-semibold mt-9">
                                                      Hotels
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="bg-zinc-100 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <div className="flex w-full flex-col ml-3 max-md:ml-2.5">
                                                  <img
                                                      loading="lazy"
                                                      srcSet="..."
                                                      className="aspect-square object-cover object-center w-[35px] overflow-hidden self-center max-w-full"
                                                  />
                                                  <div className="text-black text-center text-sm font-semibold self-stretch mt-9">
                                                      Beauty & Spatels
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="bg-zinc-100 flex flex-col flex-1 px-5 py-9 rounded-xl">
                                              <img
                                                  loading="lazy"
                                                  srcSet="..."
                                                  className="aspect-[0.97] object-cover object-center w-[34px] overflow-hidden self-center max-w-full"
                                              />
                                              <div className="text-black text-center text-sm font-semibold self-center mt-8">
                                                  Automotive
                                              </div>
                                          </div>
                                      </div>
                                      <div className="self-center flex w-full max-w-[1173px] flex-col mt-28 max-md:max-w-full max-md:mt-10">
                                          <div className="text-stone-900 text-center text-3xl font-bold self-center max-md:max-w-full">
                                              The Most Popular Things to Do in the City
                                          </div>
                                          <div className="text-stone-300 text-center text-sm font-bold self-center mt-5 max-md:max-w-full">
                                              Discover some of the most popular listings is Toronta based
                                              on user reviews and ratings
                                          </div>
                                          <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                                              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                      <div className="flex w-full grow flex-col flex-1 mx-auto py-3 rounded-xl border-2 border-solid border-neutral-200 max-md:mt-8">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="aspect-[1.36] object-cover object-center w-[350px] overflow-hidden self-center max-w-full"
                                                          />
                                                          <div className="text-neutral-500 text-center text-sm font-bold self-center mt-2.5">
                                                              But I must explain to you how all this mistaken
                                                              idea...{" "}
                                                          </div>
                                                          <div className="flex w-[229px] max-w-full items-start justify-between gap-2.5 ml-5 mt-5 max-md:justify-center max-md:ml-2.5">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[22px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  +61-8181-123
                                                              </div>
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-[0.79] object-cover object-center w-[15px] fill-neutral-500 overflow-hidden max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  New York
                                                              </div>
                                                          </div>
                                                          <div className="bg-neutral-200 self-stretch w-full h-px mt-5" />
                                                          <div className="self-center flex w-[329px] max-w-full items-start justify-between gap-5 mt-2.5">
                                                              <div className="self-stretch flex items-start justify-between gap-2.5">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-[35px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                                                                  />
                                                                  <div className="text-black text-center text-sm font-semibold self-center my-auto">
                                                                      Outdoor Activities
                                                                  </div>
                                                              </div>
                                                              <div className="self-stretch flex w-[76px] max-w-full items-start justify-between gap-5">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full fill-neutral-500 overflow-hidden flex-1 my-auto"
                                                                  />
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                                                                  />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                                      <div className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] flex w-full grow flex-col flex-1 mx-auto py-3 rounded-xl border-2 border-solid border-neutral-200 max-md:mt-8">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="aspect-[1.36] object-cover object-center w-[350px] overflow-hidden self-center max-w-full"
                                                          />
                                                          <div className="text-neutral-500 text-center text-sm font-bold self-center mt-2.5">
                                                              But I must explain to you how all this mistaken
                                                              idea...{" "}
                                                          </div>
                                                          <div className="flex w-[229px] max-w-full items-start justify-between gap-2.5 ml-5 mt-5 max-md:justify-center max-md:ml-2.5">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[22px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  +61-8181-123
                                                              </div>
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-[0.79] object-cover object-center w-[15px] fill-neutral-500 overflow-hidden max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  New York
                                                              </div>
                                                          </div>
                                                          <div className="bg-neutral-200 self-stretch w-full h-px mt-5" />
                                                          <div className="self-center flex w-[329px] max-w-full items-start justify-between gap-5 mt-2.5">
                                                              <div className="self-stretch flex items-start justify-between gap-2.5">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-[35px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                                                                  />
                                                                  <div className="text-black text-sm font-semibold self-center my-auto">
                                                                      Restaurant
                                                                  </div>
                                                              </div>
                                                              <div className="self-stretch flex w-[76px] max-w-full items-start justify-between gap-5">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full fill-neutral-500 overflow-hidden flex-1 my-auto"
                                                                  />
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                                                                  />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                                      <div className="flex w-full grow flex-col flex-1 mx-auto py-3 rounded-xl border-2 border-solid border-neutral-200 max-md:mt-8">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="aspect-[1.38] object-cover object-center w-[350px] overflow-hidden self-center max-w-full"
                                                          />
                                                          <div className="text-neutral-500 text-center text-sm font-bold self-center mt-3.5">
                                                              But I must explain to you how all this mistaken
                                                              idea...{" "}
                                                          </div>
                                                          <div className="flex w-[229px] max-w-full items-start justify-between gap-2.5 ml-5 mt-5 max-md:justify-center max-md:ml-2.5">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[22px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  +61-8181-123
                                                              </div>
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-[0.79] object-cover object-center w-[15px] fill-zinc-300 overflow-hidden max-w-full"
                                                              />
                                                              <div className="text-black text-center text-sm font-bold self-center my-auto">
                                                                  New York
                                                              </div>
                                                          </div>
                                                          <div className="bg-neutral-200 self-stretch w-full h-px mt-5" />
                                                          <div className="self-center flex w-[331px] max-w-full items-start justify-between gap-5 mt-2.5">
                                                              <div className="self-stretch flex items-start justify-between gap-3">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                                                                  />
                                                                  <div className="text-black text-sm font-semibold self-center my-auto">
                                                                      Hotels
                                                                  </div>
                                                              </div>
                                                              <div className="flex items-start justify-between gap-5 flex-1">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full fill-neutral-500 overflow-hidden flex-1 my-auto"
                                                                  />
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                                                                  />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-[11.5] object-cover object-center w-[92px] overflow-hidden self-center max-w-full grow mt-12 max-md:mt-10"
                                          />
                                      </div>
                                      <div className="self-stretch flex w-full flex-col mt-52 max-md:max-w-full max-md:mt-10">
                                          <div className="text-black text-center text-3xl font-semibold self-center">
                                              Trending Cities
                                          </div>
                                          <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-5">
                                              Cities You Must Explore This Summer
                                          </div>
                                          <div className="self-center w-full max-w-[1172px] mt-16 max-md:max-w-full max-md:mt-10">
                                              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                  <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
                                                      <div className="flex-col overflow-hidden relative flex min-h-[350px] grow pt-72 pb-7 px-5 max-md:max-w-full max-md:mt-7">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                                          />
                                                          <div className="relative text-white text-center text-lg font-semibold self-center">
                                                              Miami
                                                          </div>
                                                          <div className="relative text-white text-center text-sm font-bold self-center mt-5">
                                                              62 Listings
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                                      <div className="flex-col overflow-hidden relative flex aspect-[1.062857142857143] grow pt-72 pb-7 px-5 max-md:mt-7">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                                          />
                                                          <div className="relative text-white text-center text-lg font-semibold self-center">
                                                              Los Angeles
                                                          </div>
                                                          <div className="relative text-white text-center text-sm font-bold self-center mt-4">
                                                              45 Listings
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="self-center w-full max-w-[1172px] mt-8 max-md:max-w-full">
                                              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                      <div className="flex-col overflow-hidden relative flex aspect-[1.0598290598290598] grow pt-72 pb-8 px-5 max-md:mt-7">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                                          />
                                                          <div className="relative text-white text-center text-lg font-semibold self-center">
                                                              Florida
                                                          </div>
                                                          <div className="relative text-white text-center text-sm font-semibold self-center mt-5">
                                                              86 Listings
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                                                      <div className="flex-col overflow-hidden relative flex min-h-[351px] grow pt-72 pb-8 px-5 max-md:max-w-full max-md:mt-7">
                                                          <img
                                                              loading="lazy"
                                                              srcSet="..."
                                                              className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                                          />
                                                          <div className="relative self-center flex w-[76px] max-w-full flex-col">
                                                              <div className="text-white text-center text-lg font-semibold">
                                                                  New York
                                                              </div>
                                                              <div className="text-white text-center text-sm font-semibold mt-5">
                                                                  21 Listings
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex-col fill-zinc-100 overflow-hidden self-stretch relative flex min-h-[715px] w-full mt-28 px-5 py-28 max-md:max-w-full max-md:mt-10">
                                              <img
                                                  loading="lazy"
                                                  srcSet="..."
                                                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                              />
                                              <div className="relative text-black text-center text-3xl font-medium tracking-wide self-center">
                                                  How it Works
                                              </div>
                                              <div className="relative text-neutral-500 text-center text-sm font-semibold self-center mt-7">
                                                  Bringing business and community members together.
                                              </div>
                                              <div className="relative self-center w-full max-w-[1168px] mt-16 -mb-5 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
                                                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                      <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-neutral-100 relative flex w-full grow flex-col flex-1 mx-auto pt-14 pb-16 px-5 rounded-xl max-md:mt-8">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[121px] overflow-hidden self-center max-w-full rounded-[50%]"
                                                              />
                                                              <div className="text-black text-center text-base font-semibold self-center mt-10 max-md:mt-10">
                                                                  Find Businesses
                                                              </div>
                                                              <div className="text-neutral-500 text-center text-sm font-semibold max-w-[297px] self-center mt-8">
                                                                  Discover & connect with great local businesses
                                                                  <br />
                                                                  in your local neighborhood like dentists, hair
                                                                  <br />
                                                                  stylists and more
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                                          <div className="bg-neutral-100 relative flex w-full grow flex-col flex-1 mx-auto pt-14 pb-16 px-5 rounded-xl max-md:mt-8">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[121px] overflow-hidden self-center max-w-full rounded-[50%]"
                                                              />
                                                              <div className="text-black text-center text-base font-semibold self-center mt-10 max-md:mt-10">
                                                                  Review Listings{" "}
                                                              </div>
                                                              <div className="text-neutral-500 text-center text-sm font-semibold max-w-[297px] self-center mt-7">
                                                                  Discover & connect with great local businesses
                                                                  <br />
                                                                  in your local neighborhood like dentists, hair
                                                                  <br />
                                                                  stylists and more
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                                          <div className="bg-neutral-100 relative flex w-full grow flex-col flex-1 mx-auto pt-14 pb-16 px-5 rounded-xl max-md:mt-8">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-square object-cover object-center w-[121px] overflow-hidden self-center max-w-full rounded-[50%]"
                                                              />
                                                              <div className="text-black text-center text-base font-semibold self-center mt-10 max-md:mt-10">
                                                                  Make a Reservation
                                                              </div>
                                                              <div className="text-neutral-500 text-center text-sm font-semibold max-w-[297px] self-center mt-8">
                                                                  Discover & connect with great local businesses
                                                                  <br />
                                                                  in your local neighborhood like dentists, hair
                                                                  <br />
                                                                  stylists and more
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="text-black text-center text-3xl font-semibold self-center mt-28 max-md:max-w-full max-md:mt-10">
                                              Testimonials From Our Cutomers
                                          </div>
                                          <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-7">
                                              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                                          </div>
                                      </div>
                                      <div className="self-center w-full max-w-[1167px] mt-14 max-md:max-w-full max-md:mt-10">
                                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                                  <div className="bg-neutral-100 flex grow flex-col w-full mx-auto pt-11 pb-16 px-5 rounded-xl max-md:max-w-full max-md:mt-10">
                                                      <div className="self-center flex w-[407px] max-w-full flex-col">
                                                          <div className="flex w-[259px] max-w-full items-start justify-between gap-5">
                                                              <img
                                                                  loading="lazy"
                                                                  srcSet="..."
                                                                  className="aspect-[1.61] object-cover object-center w-[37px] fill-neutral-500 overflow-hidden max-w-full mt-2.5"
                                                              />
                                                              <div className="flex flex-col">
                                                                  <img
                                                                      loading="lazy"
                                                                      srcSet="..."
                                                                      className="aspect-square object-cover object-center w-[72px] overflow-hidden self-center max-w-full rounded-[50%]"
                                                                  />
                                                                  <div className="text-black text-center text-base font-semibold self-stretch mt-6">
                                                                      Alison Dawn
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-5">
                                                              WordPress Developer
                                                          </div>
                                                          <div className="text-neutral-500 text-center text-sm font-semibold max-w-[393px] ml-4 mt-8 max-md:ml-2.5">
                                                              “ I believe in lifelong learning and Skola is a
                                                              great place to learn
                                                              <br />
                                                              from experts. I’ve learned a lot and recommend it to
                                                              all my
                                                              <br />
                                                              friends “
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                                  <div className="bg-zinc-50 flex grow flex-col w-full mx-auto pt-11 pb-16 px-5 rounded-xl max-md:max-w-full max-md:mt-10">
                                                      <img
                                                          loading="lazy"
                                                          srcSet="..."
                                                          className="aspect-square object-cover object-center w-[72px] overflow-hidden self-center max-w-full rounded-[50%]"
                                                      />
                                                      <div className="text-neutral-500 text-center text-base font-semibold self-center mt-6">
                                                          Danial Parker
                                                      </div>
                                                      <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-5">
                                                          Front-end Developer
                                                      </div>
                                                      <div className="text-neutral-500 text-center text-sm font-semibold max-w-[393px] self-center mt-8">
                                                          “ I believe in lifelong learning and Skola is a great
                                                          place to learn
                                                          <br />
                                                          from experts. I’ve learned a lot and recommend it to
                                                          all my
                                                          <br />
                                                          friends “
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[11.5] object-cover object-center w-[92px] overflow-hidden self-center max-w-full mt-7"
                  />
                  <div className="flex-col overflow-hidden self-stretch relative flex min-h-[602px] w-full mt-24 pt-52 pb-44 px-5 max-md:max-w-full max-md:mt-10">
                      <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative text-white text-center text-5xl font-semibold self-center max-md:max-w-full max-md:text-4xl">
                          Get Business Exposure
                      </div>
                      <div className="relative text-white text-center text-sm font-semibold self-center max-w-[702px] mt-8 max-md:max-w-full">
                          Your business deserves efficiently unleash cross-media information
                          without cross-media value. Quickly
                          <br />
                          maximize timely deliverables for real-time schemas.
                      </div>
                      <div className="relative justify-center items-center bg-white self-center flex w-[201px] max-w-full flex-col mt-11 -mb-9 px-5 py-5 rounded-xl max-md:mt-10 max-md:mb-2.5">
                          <div className="text-blue-600 text-center text-sm font-bold self-center">
                              How It Works
                          </div>
                      </div>
                  </div>
                  <div className="text-black text-center text-3xl font-semibold self-center mt-24 max-md:mt-10">
                      News & Tips
                  </div>
                  <div className="text-neutral-500 text-center text-sm font-semibold self-center mt-5">
                      Checkout Latest News And Articles From Our Blog
                  </div>
                  <div className="self-center w-full max-w-[1170px] mt-14 max-md:max-w-full max-md:mt-10">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                              <div className="flex w-full grow flex-col flex-1 mx-auto pt-2.5 pb-6 px-2.5 rounded-xl border-[3px] border-solid border-gray-200 max-md:mt-8">
                                  <div className="flex-col overflow-hidden relative flex aspect-[1.3888888888888888] w-full pt-6 pb-52 px-5">
                                      <img
                                          loading="lazy"
                                          srcSet="..."
                                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                      />
                                      <div className="relative text-black text-sm font-semibold justify-center items-center bg-zinc-300 w-[127px] max-w-full -mb-10 px-5 py-1.5 rounded-2xl max-md:mb-2.5">
                                          Health & Care
                                      </div>
                                  </div>
                                  <div className="flex w-[235px] max-w-full items-start justify-between gap-5 ml-2.5 mt-5">
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold self-center my-auto">
                                              Jack Wilson
                                          </div>
                                      </div>
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold">
                                              06 April, 2020
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-black text-lg font-semibold max-w-[306px] ml-2.5 mt-5">
                                      The Top 25 Bike Stores in Toronto by <br />
                                      Neighborhood
                                  </div>
                              </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="flex w-full grow flex-col flex-1 mx-auto pt-2.5 pb-7 px-2.5 rounded-xl border-[3px] border-solid border-gray-200 max-md:mt-8">
                                  <div className="flex-col overflow-hidden relative flex aspect-[1.3888888888888888] w-full pt-6 pb-52 px-5">
                                      <img
                                          loading="lazy"
                                          srcSet="..."
                                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                      />
                                      <div className="relative text-black text-sm font-semibold justify-center items-center bg-zinc-300 w-[87px] max-w-full -mb-10 px-5 py-1.5 rounded-2xl max-md:mb-2.5">
                                          Culture
                                      </div>
                                  </div>
                                  <div className="flex w-[235px] max-w-full items-start justify-between gap-5 ml-2.5 mt-5">
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold self-center my-auto">
                                              Jack Wilson
                                          </div>
                                      </div>
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold">
                                              06 April, 2020
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-black text-lg font-semibold max-w-[312px] ml-2.5 mt-5">
                                      How to Wear a Headscarf Like a Gucci
                                      <br />
                                      Muse
                                  </div>
                              </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="flex w-full grow flex-col flex-1 mx-auto pt-2.5 pb-6 px-2.5 rounded-xl border-[3px] border-solid border-gray-200 max-md:mt-8">
                                  <div className="flex-col overflow-hidden relative flex aspect-[1.3888888888888888] w-full pt-6 pb-52 px-5">
                                      <img
                                          loading="lazy"
                                          srcSet="..."
                                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                      />
                                      <div className="relative text-black text-sm font-semibold justify-center items-center bg-zinc-300 w-[102px] max-w-full -mb-10 px-5 py-1.5 rounded-2xl max-md:mb-2.5">
                                          Travelling
                                      </div>
                                  </div>
                                  <div className="flex w-[235px] max-w-full items-start justify-between gap-5 ml-2.5 mt-5">
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden self-stretch max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold self-center my-auto">
                                              Jack Wilson
                                          </div>
                                      </div>
                                      <div className="self-stretch flex items-start justify-between gap-2.5">
                                          <img
                                              loading="lazy"
                                              srcSet="..."
                                              className="aspect-square object-cover object-center w-[15px] fill-neutral-500 overflow-hidden max-w-full"
                                          />
                                          <div className="text-neutral-500 text-center text-xs font-semibold">
                                              06 April, 2020
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-black text-lg font-semibold max-w-[308px] ml-2.5 mt-5">
                                      Quisque sed eros mollis, pretium odio
                                      <br />
                                      feugiat dictum
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </AppLayout>
        </>
    )
}

export default Services