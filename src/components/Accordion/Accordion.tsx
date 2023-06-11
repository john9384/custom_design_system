import React, { useState } from 'react';
import { Icon } from '../Icon';
import { motion as m } from 'framer-motion';
import styled from 'styled-components';

const variants = {
  open: { height: 'fit-content' },
  closed: { height: 0 },
};

function CustomAccordion({ accordionItems, withBorder = false }: any) {
  const [openItems, setOpenItems] = useState([0]);
  const toggle = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item != index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const lastItem = accordionItems.length - 1;

  const itemIsOpen = (index: number) => {
    return openItems.includes(index);
  };

  return (
    <Accordion>
      {accordionItems.map((item: any, index: number) => {
        const currentIndexIsLastItem = index === lastItem;
        const currentIndexItemIsOpened = itemIsOpen(index);
        const lastItemHeaderClosed =
          currentIndexIsLastItem && !currentIndexItemIsOpened;

        return (
          <AccordionItem key={index}>
            {/*Header*/}
            <AccordionHeader
              className={`accordion__header ${
                lastItemHeaderClosed && 'accordion__header--last_closed'
              }`}
            >
              <AccordionHeaderContent>{item.header}</AccordionHeaderContent>
              <AccordionHeaderIcon onClick={() => toggle(index)}>
                {currentIndexItemIsOpened ? (
                  <Icon iconName="chevron-up" />
                ) : (
                  <Icon iconName="chevron-down" />
                )}
              </AccordionHeaderIcon>
            </AccordionHeader>

            {/*Body*/}
            <AccordionBody
              withBorder={withBorder}
              isOpen={itemIsOpen(index)}
              withBorderLastItem={
                currentIndexIsLastItem && currentIndexItemIsOpened
              }
              animate={itemIsOpen(index) ? 'open' : 'closed'}
              variants={variants}
              transition={{ duration: 0.5, ease: 'easeIn' }}
              exit={{ opacity: 0 }}
            >
              {item.body}
            </AccordionBody>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default CustomAccordion;

const Accordion = styled.div`
  border-radius: 5px;
`;

const AccordionItem = styled.div`
  transition: all 0.5s;

  &:first-child,
  &:first-child > .accordion__header {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .accordion__header--last_closed {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

const AccordionHeader = styled.div`
  width: 100%;
  border: 1px solid #dee2e6;
  cursor: pointer;
  height: 4.8rem;
  display: flex;
  align-items: center;
`;

const AccordionHeaderContent = styled.div`
  flex: 1;
`;
const AccordionHeaderIcon = styled.span`
  width: 4.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IAccordionBody {
  withBorder: boolean;
  isOpen: boolean;
  withBorderLastItem: boolean;
}

const AccordionBody = styled(m.div)<IAccordionBody>`
  width: 100%;
  overflow: hidden;
  transition: all 0.5s;
  height: 0;

  ${({ withBorder }) =>
    withBorder &&
    `border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    `}
  ${({ withBorderLastItem }) =>
    withBorderLastItem &&
    `border-bottom: 1px solid #dee2e6;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    `}

  ${({ withBorder }) =>
    withBorder &&
    `border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    `}
`;
