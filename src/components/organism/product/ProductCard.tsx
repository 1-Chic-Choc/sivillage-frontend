import { Product } from "@/types/ProductTypes";
import ProductThumbnail from "./ProductThumbnail";
import {
  getBrand,
  getProductOptionList,
  getProductScore,
} from "@/action/productAction";
import ProductColor from "./ProductColor";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { productClassName } from "@/lib/classNames";
import Link from "next/link";
import PriceDisplay from "@/components/molecule/PriceDisplay";
import StarIcon from "@/components/atom/icon/StarIcon";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default async function ProductCard({
  product: { productUuid, name, brandUuid },
}: ProductCardProps) {
  const [productOptionList, brand, productScore] = await Promise.all([
    getProductOptionList({
      productUuid,
    }),
    getBrand({ brandUuid }),
    getProductScore({ productUuid }),
  ]);
  // console.log(productScore)

  if (!productOptionList) {
    return null;
  }

  const { productOptionUuid, price, discountPrice, discountRate } =
    productOptionList[0];

  const colorIds = Array.from(
    new Set(productOptionList.map(({ colorId }) => colorId)),
  );

  return (
    <Link href={`/product/${productUuid}`} className={productClassName.item}>
      <div className={productClassName.image}>
        <Suspense fallback={<Skeleton className="size-full" />}>
          <ProductThumbnail {...{ productOptionUuid }} />
        </Suspense>
        <div className={productClassName.blend} />
      </div>

      <div className={productClassName.textContainer}>
        <p className={productClassName.brand}>{brand && brand.name}</p>
        <p className={productClassName.name}>{name}</p>
        <p className={productClassName.price}>
          {discountRate && (
            <span className={productClassName.discountRate}>
              {discountRate}
            </span>
          )}
          <PriceDisplay price={discountPrice || price} />
        </p>
        {productScore?.reviewCount ? (
          <div className="flex mt-[8px]">
            <span>
              <StarIcon />
            </span>
            <span className="text-[12px] font-[400] leading-[14px]">
              {productScore?.starPointAverage}{" "}
              <span className="text-[#929292]">
                ({productScore?.reviewCount})
              </span>
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex gap-[8px] pl-[8px] flex-wrap overflow-hidden">
        {colorIds.length > 1
          ? colorIds.map((colorId) => (
              <ProductColor key={colorId} {...{ colorId }} />
            ))
          : null}
      </div>
    </Link>
  );
}

export async function ProductCardSkeleton() {
  return (
    // <div className={productClassName.item}>
    <div className="relative mb-[36px]">
      <div className={productClassName.image}>
        <Skeleton className="size-full" />
      </div>

      <div className={productClassName.textContainer}>
        <Skeleton className={productClassName.brand}></Skeleton>
        <Skeleton className={productClassName.name}></Skeleton>
        <Skeleton className={productClassName.price}></Skeleton>
        {/* {colorIds.length > 1
          ? colorIds.map((colorId) => (
              <ProductColor key={colorId} {...{ colorId }} />
            ))
          : null} */}
      </div>
    </div>
  );
}
