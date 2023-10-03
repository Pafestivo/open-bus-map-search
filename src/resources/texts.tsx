import React from 'react'

const PLACEHOLDER = 'XXX'

export const TEXTS = {
  realtime_map_explanation: 'נתוני מיקום של אוטובוסים שנאספו בזמן אמת',
  timeline_page_title: 'לוח זמנים היסטורי',
  realtime_map_page_title: 'מפה בזמן אמת',
  gaps_page_title: 'נסיעות שלא יצאו',
  singleline_map_page_title: 'מפה לפי קו',
  choose_datetime: 'תאריך ושעה',
  choose_date: 'תאריך',
  choose_time: 'שעה',
  choose_operator: 'חברה מפעילה',
  operator_placeholder: 'לדוגמא: דן',
  choose_line: 'מספר קו',
  line_placeholder: 'לדוגמא: 17א',
  choose_route: `בחירת מסלול נסיעה (XXX אפשרויות)`,
  choose_stop: `בחירת תחנה (XXX אפשרויות)`,
  direction_arrow: '⟵',
  date_format: 'YYYY-MM-DD',
  time_format: 'HH:mm:ss',
  datetime_format: 'HH:mm:ss · YYYY-MM-DD',
  loading_routes: 'מסלולי נסיעה בטעינה',
  loading_stops: 'תחנות עצירה בטעינה',
  loading_gaps: 'פערי נסיעות בטעינה',
  timestamp_target: 'זמן החיפוש ⌚',
  timestamp_gtfs: 'זמן עצירה מתוכנן 🕛',
  timestamp_siri: 'זמן עצירה בפועל 🚌',
  loading_hits: 'זמני נסיעה בטעינה',
  line_not_found: 'הקו לא נמצא',
  hits_not_found: 'לא נמצאו נסיעות מתוכננות או בפועל',
  planned_time: 'שעה מתוכננת',
  planned_status: 'סטטוס',
  ride_as_planned: 'יצאה כמתוכנן ✔️',
  ride_missing: 'נסיעה חסרה ❌',
  ride_extra: 'נסיעה שלא תוכננה 🧐',
  ride_duped: 'נסיעה כפולה ❇️',
  checkbox_only_gaps: 'רק פערים',
  dashboard_page_title: 'מפעילי תח"צ לפי קיום נסיעות מתוכננות',
  dashboard_tooltip_content:
    'על כל קו בישראל מוצמד GPS שמדווח את מיקום האוטובוס כל כמה רגעים.\n' +
    'אז מה היא נסיעה שלא בוצעה? זאת נסיעה שתוכננה, אבל לא דווח שיצאה בנתוני הGPS. תוכלו לראות אותה באפליקציה למשל, אבל כשתחכו בתחנה, היא לעולם לא תגיע',
  worst_lines_page_title: 'הקווים הגרועים ביותר של 5 המפעילות הגדולות',
  rides_planned: 'נסיעות שתוכננו',
  rides_actual: 'נסיעות שיצאו',
  dashboard_page_graph_title: 'אחוזי יציאה מסך הנסיעות לפי זמן',
  from_date: 'מתאריך',
  to_date: 'עד תאריך',
  watch_locations_in_range: 'צפה במיקומי אוטובוסים בטווח של',
  minutes: 'דקות',
  minutes_5: '5 דקות',
  show_x_bus_locations: 'מיקומי אוטובוסים',
  from_time_x_to_time_y: 'משעה XXX עד שעה YYY',
  choose_start_time: 'בחירת שעת התחלה',
  group_by_hour_tooltip_content: 'קיבוץ לפי שעה',
  start: 'התחלה',
  end: 'סיום',
  about_title: 'אודות',
  donate_title: 'לתרומות',
  report_a_bug_title: 'דיווח על באג',
  website_name: 'דאטאבוס',
  what_is_website: 'מהו אתר “דאטאבוס”?',
  what_is_website_paragraph:
    'אתר דאטאבוס של הסדנא לידע ציבורי מציג נתונים על איכות קווי התחבורה הציבורית בארץ (אמינות, דיוק, מסלול). דאטאבוס מחבר למעשה בין מספר מקורות מידע ממשלתיים:',
  planning_information:
    "מידע התכנון - GTFS - המפורסם כל יום ומכיל את פרטי הקווים, מיקומי התחנות, שעות המעבר בהן וכו'.",
  performance_information:
    'מידע הביצוע - SIRI - לכל אוטובוס בישראל מוצמד משדר GPS שמדווח את מיקום האוטובוס כל כמה שניות.',
  discovered_mistake: 'גילינו טעות או מידע לא מעודכן, מה עושים?',
  discovered_mistake_paragraph:
    'מכיוון שכל המידע המוצג באתר מתבסס על מקורות המידע הרשמיים, מומלץ לפנות לגורם המפרסם לצורך בירור או תיקון הבעיה. צוות “דאטאבוס“ ישמח לסייע לכם להבין מיהו הגורם הממשלתי שפרסם את הנתון או המידע שדורשים בירור או תיקון.',
  privacy: 'פרטיות',
  license: 'רשיון שימוש',
  questions: 'שאלות? תגובות? רעיונות?',
  funding: 'מימון',
  funding_paragraph: (
    <>
      דאטא בוס מפותח בעבודת מתנדבים ומבוסס על{' '}
      <a href="https://open-bus-stride-api.hasadna.org.il/docs">Open API</a> שפותח בסדנא לידע ציבורי
      בעזרתם הנדיבה של -
    </>
  ),
  mr_meir: 'מר אשר מאיר',
  innovation_authority: 'רשות החדשנות',
  migdal_company: '“מגדל בקהילה“',
  and_smaller_donors: 'ותרומות קטנות נוספות של ידידי ואוהדי הסדנא.',
}

export const formatted = (text: string, value: string) => text.replace(PLACEHOLDER, value)