import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartTwo from '../../components/Charts/ChartTwo';
import TableOne from '../../components/Tables/TableThree';
import DefaultLayout from '../../layout/DefaultLayout';
import userSix from '../../images/user/SR.jpg';


const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="px-4 pb-6 pt-18 text-center lg:pb-8 xl:pb-11.5">
        <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
          <div className="relative drop-shadow-2 rounded-full">
            <img  className=" rounded-full" src={userSix} alt="profile" />

          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
          Somapala Senanayake
          </h3>
          <p className="font-medium">Employer Type - Milk Provider</p>
          <p className="font-medium">Employer ID  - EMP000001</p>
          <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-col">
              <span className="font-semibold text-black dark:text-white">
              District
              </span>
              <span className="text-sm">Nuwara Eliya</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-col">
              <span className="font-semibold text-black dark:text-white">
              Area
              </span>
              <span className="text-sm">Ambewela</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-col">
              <span className="font-bold text-black dark:text-white">
                Last given
              </span>
              <span className="text-sm">04/25/2024</span>
            </div>
          </div>


        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

        <CardDataStats title="Milk Quantitiy" total="3.46 l" rate="0.43%" levelUp>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="612.000000pt" height="612.000000pt" viewBox="0 0 612.000000 612.000000"
            preserveAspectRatio="xMidYMid meet"
            className="theme-fill">
            <g transform="translate(0.000000,612.000000) scale(0.100000,-0.100000)"
              fill="currentColor" stroke="none">
              <path d="M1811 5481 l-31 -29 0 -204 0 -203 -68 -110 c-38 -61 -170 -273 -295 -471 -125 -199 -231 -374 -237 -389 -14 -38 -14 -3279 1 -3307 27 -50 -54 -48 1884 -48 1948 0 1847 -3 1875 49 7 13 10 562 10 1666 l0 1646 -211 337 c-116 185 -251 400 -300 477 l-88 140 -1 197 c0 131 -4 206 -12 223 -26 58 38 55 -1281 55 l-1215 0 -31 -29z m2339 -271 l0 -100 -1085 0 -1085 0 0 100 0 100 1085 0 1085 0 0 -100z m-113 -352 c-18 -29 -127 -203 -241 -385 l-209 -333 -1063 0 c-853 0 -1064 3 -1064 13 0 7 11 28 23 47 13 19 109 170 212 335 103 165 199 317 212 338 l23 37 1070 0 1071 0 -34 -52z m420 -361 c111 -178 205 -331 209 -340 6 -16 -26 -17 -416 -17 -374 0 -421 2 -416 15 9 23 410 665 416 665 3 0 96 -146 207 -323z m-912 -992 l0 -440 -1087 -3 -1088 -2 0 445 0 445 1088 -2 1087 -3 0 -440z m1213 -1072 l2 -1513 -510 0 -510 0 0 1508 c0 830 3 1512 7 1515 3 4 232 6 507 5 l501 -3 3 -1512z m-1213 -13 l0 -445 -1087 -3 -1088 -2 0 450 0 450 1088 -2 1087 -3 0 -445z m5 -1075 l0 -425 -1095 0 -1095 0 0 424 1 425 27 3 c15 2 507 2 1095 0 l1067 -2 0 -425z" />
              <path d="M1642 2548 c-17 -79 -45 -204 -62 -278 -17 -73 -28 -140 -26 -147 6 -14 54 -18 72 -5 6 4 32 105 59 226 35 157 51 212 56 195 4 -13 15 -87 23 -164 23 -197 19 -185 69 -185 l42 0 105 185 c58 101 106 181 108 177 1 -4 -18 -97 -43 -206 -25 -109 -45 -208 -45 -218 0 -16 6 -19 43 -16 l42 3 62 275 c34 151 63 281 63 288 0 8 -21 12 -72 12 l-73 0 -95 -169 c-52 -93 -97 -167 -100 -164 -3 2 -14 77 -25 166 l-20 162 -76 3 -75 3 -32 -143z" />
              <path d="M2342 2638 c-6 -29 -34 -153 -61 -276 -28 -123 -51 -230 -51 -238 0 -22 87 -19 94 4 2 9 30 132 61 272 31 140 59 263 61 273 5 14 -2 17 -44 17 l-49 0 -11 -52z" />
              <path d="M2585 2678 c-15 -49 -123 -554 -119 -560 7 -10 291 -11 298 0 2 4 7 24 11 45 l7 37 -101 0 c-77 0 -101 3 -101 13 0 8 23 113 50 235 28 122 50 226 50 232 0 15 -90 13 -95 -2z" />
              <path d="M2950 2593 c-12 -54 -41 -182 -65 -285 -23 -103 -40 -190 -37 -193 3 -3 23 -5 44 -5 30 0 40 5 48 23 5 12 34 137 65 277 31 140 58 261 60 268 3 8 -10 12 -44 12 l-49 0 -22 -97z" />
              <path d="M3130 2549 c-63 -78 -114 -147 -112 -153 13 -48 106 -272 115 -278 17 -11 107 -10 107 1 0 6 -25 67 -56 138 -30 70 -58 133 -60 139 -3 6 47 73 110 149 64 75 116 139 116 141 0 2 -24 4 -53 4 l-52 0 -115 -141z" />
            </g>
          </svg>

        </CardDataStats>
        <CardDataStats title="Quality Grade" total="A" rate="4.35%" levelUp>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            className="theme-fill">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="currentColor" stroke="none">
              <path d="M2339 4455 c-206 -32 -377 -93 -544 -193 -450 -271 -724 -753 -725 -1275 0 -371 129 -711 378 -995 l55 -62 -11 -53 c-6 -28 -70 -315 -142 -636 -72 -321 -130 -586 -128 -590 2 -4 296 84 653 196 l650 203 125 -35 c69 -20 379 -111 690 -204 311 -92 566 -167 568 -165 3 2 -152 612 -279 1098 -22 81 -39 153 -39 158 0 6 25 37 55 70 259 280 394 625 395 1011 1 538 -277 1019 -746 1291 -276 160 -642 229 -955 181z m471 -260 c247 -54 459 -174 638 -359  174 -181 285 -400 328 -646 22 -129 15 -369 -15 -490 -104 -417 -406 -750 -807 -888 -246 -85 -562 -83 -806 4 -433 156 -743 528 -815 977 -19 122 -13  333 12 447 21 94 64 219 100 290 122 241 346 461 585 572 123 58 185 76 380  112 54 10 328 -3 400 -19z m-917 -2541 c142 -72 289 -118 457 -144 96 -14 314 -14 410 0 201 31 417 106 556 195 37 24 56 31 59 23 14 -43 183 -713 180 -716 -1 -2 -146 39 -322 91 -175 53 -405 121 -511 153 l-193 57 -482 -151 c-265  -83 -483 -146 -485 -142 -3 8 137 655 154 713 5 16 9 15 47 -8 23 -14 82 -46  130 -71z" />
              <path d="M2444 3539 c-64 -129 -117 -235 -118 -236 -1 -2 -117 -19 -257 -40 -140 -20 -256 -38 -259 -40 -2 -2 80 -86 184 -186 l189 -182 -45 -257 c-24 -142 -41 -258 -37 -258 3 0 109 54 233 120 l228 119 231 -123 c128 -68 233 -123 234 -122 1 1 -18 119 -43 261 l-45 260 188 181 c103 100 186 184 183 186 -3 3 -119 21 -259 41 -140 20 -255 38 -257 40 -1 1 -54 107 -118 236 l-115 233 -117 -233z" />
            </g>
          </svg>

        </CardDataStats>
        <CardDataStats title="Temperature" total="28.0 ℃" rate="2.59%" levelUp>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="229.000000pt" height="257.000000pt" viewBox="0 0 229.000000 277.000000"
            preserveAspectRatio="xMidYMid meet"
            className="theme-fill">
            <g transform="translate(0.000000,277.000000) scale(0.100000,-0.100000)"
              fill="currentColor" stroke="none">
              <path d="M1065 2646 c-37 -17 -80 -62 -94 -99 -8 -19 -11 -303 -11 -881 l0 -853 -40 -28 c-53 -37 -106 -111 -132 -182 -29 -82 -22 -206 15 -283 35 -74 106 -143 185 -182 59 -29 74 -32 156 -33 81 0 98 3 156 31 230 109 295 394 135 590 -19 23 -51 52 -70 64 l-36 22 3 102 3 101 67 3 c62 3 67 5 65 24 -3 18 -11 21 -68 22 l-64 1 -3 153 -3 152 65 0 c63 0 79 8 69 38 -3 8 -27 12 -69 12 l-65 0 3 153 3 152 68 3 c57 2 67 6 65 20 -2 13 -17 18 -68 22 l-65 5 -3 153 -3 152 65 0 c49 0 65 4 70 16 10 27 -3 34 -70 34 l-64 0 0 194 c0 113 -4 206 -11 223 -14 38 -57 83 -96 99 -41 18 -119 17 -158 0z m151 -71 c12 -8 28 -29 38 -48 14 -32 16 -117 16 -899 l0 -863 36 -20 c108 -58 172 -211 140 -336 -40 -155 -175 -250 -333 -236 -209 20 -335 241 -248 435 28 62 82 122 131 144 l24 11 0 858 c0 969 -4 920 73 958 44 22 83 21 123 -4z" />
              <path d="M1070 1130 l0 -390 -49 -24 c-117 -60 -170 -197 -126 -327 35 -103 134 -173 245 -173 75 -1 118 14 177 61 81 64 114 185 81 295 -15 52 -78 121 -133 148 l-45 22 0 389 0 389 -75 0 -75 0 0 -390z" />
            </g>
          </svg>

        </CardDataStats>
        <CardDataStats title="PH Value" total="6.78" rate="0.95%" levelDown>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="268.000000pt" height="193.000000pt" viewBox="0 0 268.000000 193.000000"
            preserveAspectRatio="xMidYMid meet"
            className="theme-fill">
            <g transform="translate(0.000000,193.000000) scale(0.100000,-0.100000)"
              fill="currentColor" stroke="none">
              <path d="M480 1086 l0 -476 80 0 80 0 0 173 0 174 138 6 c104 4 151 11 193 26 123 46 182 136 182 273 -1 133 -61 222 -183 270 -49 19 -80 22 -272 26 l-218 4 0 -476z m429 316 c58 -29 76 -63 76 -142 0 -54 -5 -75 -21 -97 -37 -51 -76 -63 -206 -63 l-118 0 0 160 0 160 118 0 c92 0 124 -4 151 -18z" />
              <path d="M1330 1085 l0 -475 80 0 80 0 0 210 0 210 235 0 235 0 0 -210 0 -210 80 0 80 0 0 475 0 475 -80 0 -80 0 0 -195 0 -195 -235 0 -235 0 0 195 0 195 -80 0 -80 0 0 -475z" />
            </g>
          </svg>

        </CardDataStats>
      </div>

          <div className="mx-auto mt-4.5 mb-5.5 grid max-w-72 grid-cols-2 rounded-md border border-stroke py-2.5 pl-8 shadow-1 dark:border-strokedark dark:bg-[#37404F]">

            <span className="font-semibold text-black dark:text-white">
              Total Payment
            </span>
            <span className="text-sm">Rs 25000.00 /=</span>


          </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">


        <div className="col-span-12 xl:col-span-18">
          <TableOne />
        </div>
        <ChartOne />

      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
