import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from 'framer-motion';

const Pagination = () => {
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 0.5,
            }
        }
    }
  return (
    <motion.div variants={paginationVariants} initial='hidden' animate='visible'>
      <ReactPaginate
        breakLabel={<span className="mr-4 ">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-[lightGray] rounded-md ml-4">
            <BsChevronRight />
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-[lightGray] rounded-md mr-4">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4 "
        pageClassName="flex border border-solid border-[lightGray] hover:bg-[lightGray] w-10 h=10 items-center justify-center rounded-md mr-4"
        activeClassName="bg-white text-black"
      />
    </motion.div>
  );
};

export default Pagination;
