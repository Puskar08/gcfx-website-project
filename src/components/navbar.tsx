"use client";

import Link from "next/link";
import { Menu, X, Moon, Sun, Languages, DollarSign, TrendingUp, LineChart, Bitcoin, Calculator, Calendar, BarChart2, Activity, Users, Award, Building, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Main dropdown items with icons and descriptions
const mainDropdownItems = {
  Markets: [
    {
      label: "Forex CFDs",
      href: "/markets/forex",
      description: "Get great rates on majors like EUR/USD, plus minors and exotics",
      icon: DollarSign
    },
    {
      label: "Commodity CFDs",
      href: "/markets/commodities",
      description: "Trade on metals, energies and softs, with spreads from 2 cents on oil",
      icon: TrendingUp
    },
    {
      label: "Cryptocurrency CFDs",
      href: "/markets/crypto",
      description: "Speculate on Bitcoin, Ether and more, with a trusted broker",
      icon: Bitcoin
    },
  ],
  Tools: [
    {
      label: "Economic Calendar",
      href: "/tools/calendar",
      description: "Stay updated with market-moving events",
      icon: Calendar
    },
    {
      label: "Trading Calculator",
      href: "/tools/calculator",
      description: "Calculate your potential profits and losses",
      icon: Calculator
    },
    {
      label: "Market Analysis",
      href: "/tools/analysis",
      description: "Expert insights and technical analysis",
      icon: BarChart2
    },
  ],
  Partners: [
    {
      label: "IB Program",
      href: "/partners/ib",
      description: "Earn commissions by referring clients",
      icon: Users
    },
    {
      label: "White Label",
      href: "/partners/white-label",
      description: "Launch your own branded trading platform",
      icon: Award
    },
    {
      label: "Regional Partner",
      href: "/partners/regional",
      description: "Expand our reach in your region",
      icon: Building
    },
  ],
  Learn: [
    {
      label: "Trading Basics",
      href: "/learn/basics",
      description: "Master the fundamentals of trading",
      icon: LineChart
    },
    {
      label: "Video Tutorials",
      href: "/learn/videos",
      description: "Learn through comprehensive video courses",
      icon: Activity
    },
    {
      label: "Webinars",
      href: "/learn/webinars",
      description: "Join live trading sessions with experts",
      icon: Users
    },
  ],
  "About Us": [
    {
      label: "Our Story",
      href: "/about/story",
      description: "Learn about our journey and mission",
      icon: Building
    },
    {
      label: "Regulations",
      href: "/about/regulations",
      description: "Our regulatory compliance and licenses",
      icon: Award
    },
    {
      label: "Contact Us",
      href: "/about/contact",
      description: "Get in touch with our team",
      icon: Mail
    },
  ],
};

// Side menu items for Markets dropdown
const marketsSubItems = [
  { label: "Shares CFDs", href: "/markets/shares" },
  { label: "ETF CFDs", href: "/markets/etf" },
  { label: "Index CFDs", href: "/markets/indices" },
  { label: "Currency Index CFD", href: "/markets/currency-index" },
  { label: "Dividends for index CFDs", href: "/markets/dividends-index" },
  { label: "Dividends for share CFDs", href: "/markets/dividends-shares" },
  { label: "CFD forwards", href: "/markets/forwards" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(new Set());
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Markets", href: "/markets" },
    { label: "Tools", href: "/tools" },
    { label: "Partners", href: "/partners" },
    { label: "Learn", href: "/learn" },
    { label: "About Us", href: "/about" },
  ];

  const hasDropdown = (label: string) => mainDropdownItems[label as keyof typeof mainDropdownItems];

  const toggleMobileItem = (label: string) => {
    const newExpanded = new Set(mobileExpandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setMobileExpandedItems(newExpanded);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/20 bg-transparent backdrop-blur-md">
      <div
        className="relative"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="32"
                viewBox="0 0 1166 317"
                className="h-8 w-auto text-black dark:text-white"
              >
                <path d="M0 0 C114.51 0 229.02 0 347 0 C347 45.21 347 90.42 347 137 C306.13720142 137.1209091 306.13720142 137.1209091 288.91992188 137.14648438 C277.06530837 137.1642359 265.21075918 137.18502304 253.35620117 137.22631836 C244.71985089 137.2563885 236.08355314 137.27561445 227.44715196 137.28226548 C222.88183317 137.28614816 218.31666454 137.29515692 213.75139427 137.31719017 C177.33470891 137.48604546 177.33470891 137.48604546 162 134 C160.54783533 133.68591617 159.09557856 133.37225786 157.64323425 133.05900574 C130.03938036 126.87984582 103.80203794 111.81596707 88.3581543 87.54296875 C78 70.57244526 78 70.57244526 78 62 C85.42323978 61.74420259 92.84551847 61.54923182 100.27228546 61.43006611 C103.72185256 61.37284252 107.16838886 61.29537542 110.61621094 61.17016602 C114.58751012 61.0268627 118.5576187 60.97424896 122.53125 60.92578125 C123.75863892 60.86900711 124.98602783 60.81223297 126.25061035 60.7537384 C134.70658876 60.747685 134.70658876 60.747685 138.44824219 64.37045288 C140.54882812 67.29760742 140.54882812 67.29760742 142.26574707 70.21037292 C149.62516172 82.04833613 165.00531612 86.74849189 177.7109375 90.140625 C191.64939797 93.14126957 205.4883519 93.335212 219.68359375 93.4140625 C221.83692637 93.43281222 223.99025194 93.45238834 226.14356995 93.4727478 C231.76083177 93.52367359 237.37811731 93.56350882 242.9954834 93.60089111 C249.76230921 93.64828793 256.52902102 93.70971331 263.29575348 93.76873779 C273.53045528 93.85646666 283.76514062 93.92657643 294 94 C294 77.17 294 60.34 294 43 C285.91814209 43.05236816 277.83628418 43.10473633 269.50952148 43.15869141 C243.65066823 43.31919079 217.7918284 43.43042403 191.93260887 43.51065329 C187.91592744 43.52316036 183.89924753 43.53610359 179.88256836 43.54931641 C179.08291977 43.55193951 178.28327119 43.55456261 177.45939083 43.55726521 C164.5114315 43.60077881 151.56391616 43.67962407 138.61622023 43.77152796 C125.33065834 43.86504355 112.04532896 43.92058761 98.75945145 43.94088495 C90.56103296 43.95460679 82.36386931 43.9979411 74.16583712 44.07916467 C68.54408722 44.13202593 62.92298597 44.14800148 57.30100559 44.13501377 C54.05670582 44.12860714 50.81506047 44.14388393 47.57104874 44.19205475 C44.0509787 44.24176683 40.53629063 44.22987899 37.01609802 44.20254517 C35.99371377 44.23167358 34.97132952 44.26080199 33.91796392 44.29081309 C29.5111296 44.19820794 27.01726496 44.03120291 23.84015572 40.81056285 C22.04321671 38.27436399 20.48920271 35.72600888 19 33 C18.30430908 31.89946289 17.60861816 30.79892578 16.8918457 29.66503906 C16.32554443 28.70823242 15.75924316 27.75142578 15.17578125 26.765625 C14.53962891 25.69699219 13.90347656 24.62835938 13.24804688 23.52734375 C12.28995117 21.90505859 12.28995117 21.90505859 11.3125 20.25 C10.01828882 18.06690048 8.72275724 15.88458309 7.42578125 13.703125 C6.83104004 12.70216797 6.23629883 11.70121094 5.62353516 10.66992188 C4.3159902 8.51964945 2.97062151 6.43025593 1.54296875 4.359375 C0 2 0 2 0 0 Z " fill="currentColor" transform="translate(11,140)" />
                <path d="M0 0 C2.40654323 0.02909465 4.81088244 0.02051126 7.2175293 0.00756836 C39.99179298 0.051761 71.01387582 11.6791792 95.04370117 34.13842773 C108.29007756 47.56502693 125.34057617 70.69163694 125.34057617 90.46655273 C107.52057617 90.46655273 89.70057617 90.46655273 71.34057617 90.46655273 C69.69057617 86.50655273 68.04057617 82.54655273 66.34057617 78.46655273 C57.00019428 61.25846255 44.01479824 50.79669621 25.27807617 45.15405273 C9.90178 41.23773595 -8.95547071 41.23145505 -23.65942383 47.46655273 C-24.68680664 47.8906543 -25.71418945 48.31475586 -26.77270508 48.75170898 C-45.3878428 57.2432394 -56.65141179 72.76889613 -63.65942383 91.46655273 C-72.0551696 115.55601408 -69.35600057 143.63145876 -58.65942383 166.46655273 C-54.80153757 174.17160891 -49.66955912 180.32808715 -43.65942383 186.46655273 C-42.88211914 187.29799805 -42.88211914 187.29799805 -42.08911133 188.14624023 C-38.21952587 191.89426804 -33.59566787 194.2664761 -28.84692383 196.71655273 C-28.19522217 197.05831543 -27.54352051 197.40007812 -26.87207031 197.75219727 C-10.85348668 205.67171872 12.03918361 204.88133086 28.83666992 199.78686523 C47.97239587 192.57630183 59.86005498 181.05949352 68.34057617 162.46655273 C69.66057617 159.49655273 70.98057617 156.52655273 72.34057617 153.46655273 C90.16057617 153.46655273 107.98057617 153.46655273 126.34057617 153.46655273 C123.59951963 172.65394851 114.5416173 189.59935817 102.34057617 204.46655273 C101.76823242 205.19100586 101.19588867 205.91545898 100.60620117 206.66186523 C80.37843244 231.22415584 46.47551906 243.1946414 15.71166992 246.29443359 C-21.79600965 249.01713892 -55.4569671 239.12261609 -84.06005859 214.61474609 C-100.94359294 199.7674169 -113.507555 179.4570801 -118.65942383 157.46655273 C-118.92368164 156.35795898 -119.18793945 155.24936523 -119.46020508 154.10717773 C-127.29964132 119.47990484 -122.43608831 84.66647684 -103.65942383 54.46655273 C-84.3337167 25.80044948 -54.99174114 8.26314847 -21.5559082 1.29345703 C-14.39685658 -0.03646597 -7.26067607 -0.09529222 0 0 Z " fill="currentColor" transform="translate(501.659423828125,35.533447265625)" />
                <path d="M0 0 C7.25829184 -0.25624772 14.51559116 -0.45099159 21.77750969 -0.56993389 C25.15083755 -0.62706193 28.52104613 -0.70434578 31.89257812 -0.82983398 C55.55057603 -1.6466814 55.55057603 -1.6466814 60.89135742 2.30200195 C63.4416618 5.0929944 65.18423293 7.69905613 67 11 C68.49087985 12.87833579 70.00871193 14.73586082 71.5625 16.5625 C72.29597656 17.47128906 73.02945313 18.38007812 73.78515625 19.31640625 C75.95632827 21.94708557 78.20241357 24.47942424 80.5 27 C84.41891252 31.29991791 88.09170869 35.75919547 91.75 40.28125 C93.93501569 42.92147729 96.19171391 45.4672972 98.5 48 C102.41891252 52.29991791 106.09170869 56.75919547 109.75 61.28125 C112.63595147 64.76844136 115.67700111 68.09758894 118.7265625 71.44140625 C121.9593237 75.07965124 125.00813104 78.85779763 128.0546875 82.65234375 C129.89324251 84.96072797 129.89324251 84.96072797 131.7578125 86.69140625 C133 88 133 88 133 90 C133.66 90 134.32 90 135 90 C135.27529541 89.41009277 135.55059082 88.82018555 135.83422852 88.21240234 C136.94826244 86.0981876 138.13192184 84.43683658 139.65234375 82.6015625 C140.17562256 81.96484619 140.69890137 81.32812988 141.23803711 80.67211914 C142.07927124 79.65879517 142.07927124 79.65879517 142.9375 78.625 C144.12596555 77.17917856 145.31345009 75.73255022 146.5 74.28515625 C147.09296875 73.56215332 147.6859375 72.83915039 148.296875 72.09423828 C150.71897891 69.11591154 153.08084057 66.09267973 155.4375 63.0625 C160.11936867 57.05736335 164.94989717 51.18337641 169.80615234 45.31884766 C173.90830009 40.35427192 177.91985909 35.32908535 181.87792969 30.24926758 C185.95345322 25.02909388 190.1265122 19.89099815 194.32250977 14.76733398 C195.08325806 13.83642944 195.08325806 13.83642944 195.859375 12.88671875 C196.3499942 12.30331223 196.8406134 11.7199057 197.34609985 11.11882019 C199.04770674 9.03116993 199.04770674 9.03116993 200.37556458 6.68258667 C202.72243454 2.9704228 204.48297225 0.42368822 208.82608032 -0.78929138 C212.30147545 -1.0416519 215.670304 -1.01250612 219.15234375 -0.87890625 C220.40761368 -0.86617172 221.66288361 -0.85343719 222.95619202 -0.84031677 C226.27444888 -0.79859174 229.587007 -0.71796776 232.90368652 -0.61798096 C236.29531913 -0.52545968 239.68754397 -0.48471404 243.08007812 -0.43945312 C249.72161221 -0.34040846 256.36047755 -0.18995498 263 0 C260.92182047 3.52690693 258.74998317 6.66747299 256.125 9.8125 C255.3309375 10.7715625 254.536875 11.730625 253.71875 12.71875 C253.28433594 13.24210937 252.84992188 13.76546875 252.40234375 14.3046875 C249.79250291 17.45975971 247.20852943 20.63587348 244.625 23.8125 C243.78980835 24.83899658 243.78980835 24.83899658 242.93774414 25.88623047 C239.43455687 30.20261229 235.98077233 34.55368904 232.5625 38.9375 C227.87916452 44.94281414 223.04918884 50.81849659 218.19165039 56.68334961 C214.56311013 61.07401729 210.9983663 65.50506644 207.5 70 C203.42086304 75.2411463 199.23627193 80.38510662 195 85.5 C188.87126359 92.90287943 182.89614746 100.41108762 177 108 C176.26265625 108.94617188 175.5253125 109.89234375 174.765625 110.8671875 C173.17485083 112.90974154 171.58607709 114.95379816 170 117 C173.05781029 121.77460498 176.45426938 126.13090452 180.0625 130.5 C184.24527232 135.60275928 188.38498851 140.73069172 192.4375 145.9375 C197.11671997 151.93875249 201.9435985 157.80965051 206.79736328 163.67016602 C211.00261087 168.75887383 215.11137956 173.91349234 219.17236328 179.11767578 C222.57515461 183.47440345 226.05120943 187.76517612 229.5625 192.03515625 C237.15093677 201.26532213 244.68340619 210.53484379 252.0222168 219.96508789 C255.94518805 224.98530254 260.04634095 229.84084453 264.19921875 234.671875 C266 237 266 237 266 239 C258.19024593 239.25444201 250.38156693 239.42903555 242.56860352 239.54931641 C239.91199623 239.59382925 237.26083038 239.66755659 234.60473633 239.75439453 C230.77877056 239.87630909 226.95646596 239.93254037 223.12890625 239.9765625 C221.95042618 240.02817535 220.77194611 240.07978821 219.55775452 240.13296509 C214.57802793 240.13632189 211.31317314 240.04039258 207.32516479 236.88079834 C205.02384664 234.35132127 202.99728122 231.77347088 201 229 C199.67302525 227.34903569 198.34056958 225.70244461 197 224.0625 C196.34902344 223.2375 195.69804688 222.4125 195.02734375 221.5625 C191.4119248 216.99272191 187.69567931 212.50490564 184 208 C182.60403235 206.29177642 181.20820102 204.58344143 179.8125 202.875 C175.88554489 198.07462405 171.94393032 193.28643525 168 188.5 C163.34930429 182.85581967 158.70504694 177.20666394 154.078125 171.54296875 C152.63195373 169.7733118 151.18389508 168.00519624 149.734375 166.23828125 C148.97640625 165.31402344 148.2184375 164.38976562 147.4375 163.4375 C146.70273437 162.54289063 145.96796875 161.64828125 145.2109375 160.7265625 C143.69806845 158.86086887 142.20405591 156.97976926 140.7265625 155.0859375 C140.01242187 154.17070312 139.29828125 153.25546875 138.5625 152.3125 C137.92441406 151.48363281 137.28632812 150.65476563 136.62890625 149.80078125 C136.09136719 149.20652344 135.55382812 148.61226562 135 148 C134.34 148 133.68 148 133 148 C131.68253288 149.44657151 131.68253288 149.44657151 130.3828125 151.375 C129.86468994 152.10452881 129.34656738 152.83405762 128.81274414 153.58569336 C128.25578857 154.38241455 127.69883301 155.17913574 127.125 156 C125.94005117 157.66885635 124.75382837 159.33680879 123.56640625 161.00390625 C122.96715332 161.84711426 122.36790039 162.69032227 121.75048828 163.55908203 C119.24061998 167.0588956 116.65924061 170.50190003 114.0625 173.9375 C107.90532984 182.10390566 101.84028577 190.3365747 95.78222656 198.57666016 C94.02014228 200.97261201 92.2565134 203.36741719 90.4921875 205.76171875 C89.94937134 206.50132843 89.40655518 207.24093811 88.84729004 208.00296021 C87.68515792 209.57385058 86.51239315 211.13698518 85.324646 212.68859863 C82.29820251 216.67780797 79.60232586 220.59769375 77.28662109 225.04223633 C73.75728513 231.39797628 70.16800788 237.65079575 62.92980957 239.99383545 C54.18012032 241.37497696 45.42422457 240.73298259 36.625 240.1875 C33.94323344 240.08116373 31.26089118 240.00408684 28.578125 239.92773438 C22.04487502 239.71963544 15.52397588 239.40300492 9 239 C9.94016314 237.57380831 10.88248075 236.14903675 11.82568359 234.72485352 C12.61245987 233.53449242 12.61245987 233.53449242 13.41513062 232.32008362 C15.65036749 229.04792976 18.10915456 225.99561961 20.625 222.9375 C24.82039317 217.76632732 28.90275591 212.53197387 32.875 207.1875 C37.16145839 201.42477491 41.51760308 195.72357167 45.9375 190.0625 C52.13578234 182.12257264 58.2699455 174.13599127 64.37792969 166.12646484 C67.1450518 162.49888603 69.91631897 158.87447844 72.6875 155.25 C73.23011475 154.53980713 73.77272949 153.82961426 74.33178711 153.09790039 C76.76412451 149.91590281 79.19990251 146.73684965 81.65234375 143.5703125 C87.91287464 135.48343783 93.98363136 127.26964739 100 119 C97.95953274 115.36822493 95.71381615 112.41731552 92.875 109.375 C89.62912126 105.83499632 86.51709748 102.23696635 83.5 98.5 C80.5918662 94.9052235 77.61458668 91.41739372 74.5 88 C70.58108748 83.70008209 66.90829131 79.24080453 63.25 74.71875 C61.06498431 72.07852271 58.80828609 69.5327028 56.5 67 C52.58108748 62.70008209 48.90829131 58.24080453 45.25 53.71875 C43.06498431 51.07852271 40.80828609 48.5327028 38.5 46 C34.58108748 41.70008209 30.90829131 37.24080453 27.25 32.71875 C25.06498431 30.07852271 22.80828609 27.5327028 20.5 25 C16.55237425 20.66724004 12.83620244 16.18288492 9.15234375 11.625 C6.58667919 8.49591365 3.92145067 5.46827852 1.21484375 2.4609375 C0 1 0 1 0 0 Z " fill="currentColor" transform="translate(863,39)" />
                <path d="M0 0 C65.67 0 131.34 0 199 0 C199 15.84 199 31.68 199 48 C150.82 48 102.64 48 53 48 C53 65.49 53 82.98 53 101 C92.93 101 132.86 101 174 101 C174 115.19 174 129.38 174 144 C134.07 144 94.14 144 53 144 C53 175.35 53 206.7 53 239 C35.51 239 18.02 239 0 239 C0 160.13 0 81.26 0 0 Z " fill="currentColor" transform="translate(646,39)" />
                <path d="M0 0 C1.42032367 0.00028272 2.84064748 0.00012248 4.26097107 -0.0004425 C8.08252493 -0.00072716 11.90404683 0.00511556 15.72559333 0.01213145 C19.73208434 0.01842058 23.73857623 0.01897316 27.74507141 0.02015686 C35.31664588 0.02325388 42.88820576 0.03144513 50.45977384 0.04150635 C59.08622312 0.0527183 67.71267313 0.0581907 76.3391279 0.06320179 C94.07025041 0.07362925 111.80135938 0.09119689 129.5324707 0.11352539 C128.57262116 2.04230808 127.61173393 3.97057439 126.65040588 5.89862061 C126.1154226 6.9724789 125.58043932 8.0463372 125.02924442 9.15273666 C123.46527661 12.24644295 121.81425809 15.26443798 120.05981445 18.25415039 C119.47006836 19.26219727 118.88032227 20.27024414 118.27270508 21.30883789 C117.67780273 22.31688477 117.08290039 23.32493164 116.4699707 24.36352539 C115.87120117 25.38704102 115.27243164 26.41055664 114.65551758 27.46508789 C112.9595606 30.35545926 111.26028757 33.24207088 109.5324707 36.11352539 C109.08992887 37.10412114 109.08992887 37.10412114 108.63844681 38.11472893 C107.03980164 41.32654557 105.85551402 43.66886868 102.34021854 44.85031128 C99.52246093 45.12739523 96.80014161 45.14556852 93.96923828 45.08178711 C92.37291313 45.09335091 92.37291313 45.09335091 90.74433899 45.10514832 C87.2208619 45.1216761 83.7002655 45.08219444 80.17700195 45.04321289 C77.7161952 45.04565555 75.25538954 45.05190875 72.79460144 45.0617981 C66.30247689 45.07893375 59.8113893 45.05001827 53.31939697 45.00982666 C42.97634973 44.95439223 32.63310069 44.97322423 22.28995323 44.98309708 C18.69971613 44.98076817 15.10989207 44.96191931 11.51972961 44.93966675 C-12.09284344 44.65897858 -12.09284344 44.65897858 -34.9675293 49.86352539 C-35.71325195 50.12738037 -36.45897461 50.39123535 -37.22729492 50.66308594 C-55.76969085 57.46290746 -56.65141179 69.82607866 -63.65942383 87.11352539 C-92.6175293 87.11352539 -110.7675293 87.11352539 -129.4675293 87.11352539 C-128.7699373 80.83519739 -128.12232859 76.10546159 -125.9050293 70.42602539 C-125.64036865 69.7417749 -125.37570801 69.05752441 -125.10302734 68.35253906 C-114.5607509 42.02269433 -94.24892639 23.1448031 -68.49511719 11.86254883 C-46.90031927 2.87780205 -23.20770366 -0.06384144 0 0 Z " fill="currentColor" transform="translate(215.467529296875,33.886474609375)" />
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(hasDropdown(item.label) ? item.label : null)}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-[17px] font-normal tracking-wide text-black dark:text-white transition-colors hover:text-foreground rounded-md flex  gap-1"
                  >
                    {item.label}
                    {/* Animated underline */}
                    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {/* Language Selector */}
              <Button variant="ghost" size="icon" aria-label="Choose language">
                <Languages className="h-5 w-5" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button size="sm">Sign Up</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menu - Completely Redesigned */}
        {activeDropdown && (
          <div className="hidden md:block absolute left-0 right-0 top-full bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-xl border-b border-border/40 shadow-2xl">
            <div className="w-full flex justify-center px-6 lg:px-8 py-12">
              <div className="w-full max-w-4xl">
                {/* Main Items - Stacked Vertically in Center */}
                <div className="space-y-2">
                  {mainDropdownItems[activeDropdown as keyof typeof mainDropdownItems]?.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group relative flex items-center gap-5 p-5 rounded-xl border border-border/40 bg-card/50 hover:bg-card hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-2"
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animationFillMode: 'backwards'
                        }}
                      >
                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-500 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan-500 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/40">
            {/* Language and Theme Toggle - First */}
            <div className="flex items-center justify-between px-4 pb-3 border-b border-border/40">
              <Button variant="ghost" size="icon" aria-label="Choose language">
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Login and Sign Up - Second */}
            <div className="space-y-2 px-4 pb-3 border-b border-border/40">
              <Button variant="ghost" size="sm" className="w-full">
                Log In
              </Button>
              <Button size="sm" className="w-full">
                Sign Up
              </Button>
            </div>

            {/* Nav Items - Third */}
            {navItems.map((item) => {
              const hasDropdownItems = hasDropdown(item.label);
              const isExpanded = mobileExpandedItems.has(item.label);

              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-4 py-2 text-base font-medium text-black dark:text-white hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      onClick={() => !hasDropdownItems && setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasDropdownItems && (
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="p-2 mr-2 rounded-md hover:bg-accent transition-colors"
                        aria-label={`Toggle ${item.label} menu`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Items - Only show when expanded */}
                  {hasDropdownItems && isExpanded && (
                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-border/40 ml-4">
                      {mainDropdownItems[item.label as keyof typeof mainDropdownItems]?.map((dropItem) => {
                        const Icon = dropItem.icon;
                        return (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-foreground mb-0.5">
                                {dropItem.label}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {dropItem.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};