import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OurProducts = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl">Ürünlerimiz</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <p>Ürün 1</p>
              <p>Ürün 2</p>
              <p>Ürün 3</p>
              <p>Ürün 4</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OurProducts;
