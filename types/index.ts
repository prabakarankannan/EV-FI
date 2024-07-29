import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean; 
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    id: string;
    title: string;
    total_price: string;
    waiting_period: string;
    launch_date: string;
    rtoRegistration: string;
    top_speed: string;
    true_range: string;
    companyData__slug: string;
    Brand: string;
    image_url: string;
  }
  
  export interface PageProps {
    searchParams: SearchParamsProps;
  }

export interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    model: string;
    limit: number;
    page: number;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    filters: FilterProps;
    setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
}

export interface SearchParamsProps {
    manufacturer?: string;
    limit?: string;  // or number if it's always a number
    model?: string;
  }