import Container from '@/components/ui/Container';
import Image from 'next/image';
import notFoundImage from '../../public/webp/404.webp';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="mb-10">
      <div className="flex flex-col items-center justify-center gap-5 md:gap-7 xl:gap-8">
        <div>
          <Image src={notFoundImage} alt="404" width={1012} height={700} />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <h3 className="font-base text-center text-base font-bold leading-5 text-[#000000] sm:text-[26px] sm:leading-[27.39px]">
              Something went wrong.
            </h3>
            <span className="font-base text-center text-sm font-normal leading-[18px] text-[#7c7676] sm:text-xl sm:leading-[29px]">
              Sorry, We can’t find the page you’re looking for.
            </span>
          </div>
          <Link
            href={'/'}
            className="font-base w-max rounded-[5px] bg-[#1A6AA3] px-5 py-2.5 text-base capitalize leading-[19.36px] text-white sm:px-[30px] sm:py-[14px] 5xl:text-lg"
          >
            go back
          </Link>
        </div>
      </div>
    </Container>
  );
}
