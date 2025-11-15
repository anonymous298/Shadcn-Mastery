import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {

    type AccordionType = {
        accordionTrigger : string,
        accordionContent : string
    }
    
    const accordions = [
        {accordionTrigger : 'How much it will cost?', accordionContent : "This will cost around 100$"},
        {accordionTrigger : 'Is this free?', accordionContent : "Yes, this is 100% free."},
        {accordionTrigger : 'What problem it is solving?', accordionContent : "This is solving the problem of time managemet of peoples."},
    ]

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <Accordion type="single" collapsible>
        {accordions.map((val: AccordionType, idx: number) => {
            return (
                <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger>{val.accordionTrigger}</AccordionTrigger>
                    <AccordionContent>
                        {val.accordionContent}
                    </AccordionContent>
                </AccordionItem>
            )
        })}
        
      </Accordion>
    </div>
  );
};

export default Page;
