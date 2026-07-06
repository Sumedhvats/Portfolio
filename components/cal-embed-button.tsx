"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { PhoneCall } from "lucide-react";

export function CalEmbedButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"lets-talk"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <button
      data-cal-namespace="lets-talk"
      data-cal-link="sumedhvats/lets-talk"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      aria-label="Book a call"
      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap cursor-pointer"
    >
      <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 pointer-events-none" />
    </button>
  );
}
