# gtt
Gitlab Time Tracker App

### For scicomp team
Please, use the below json User Groups and Tag Colors

```json
{
  "brandl": "Bioinformatics Consultation/Analysis",
  "domingue": "Bioinformatics Consultation/Analysis",
  "herseman": "Bioinformatics Consultation/Analysis",
  "walker": "BioImage Informatics support",
  "nadar": "BioImage Informatics support",
  "moon": "SciDev support",
  "janosch": "SciDev support",
  "steinbac": "SciDev support",
  "henry": "Bioinformatics Consultation/Analysis",
  "klykov": "Instrument Control Development"
}
```

```json
{
  "BioImage_analysis": "primary",
  "Bioinformatics": "primary",
  "HPC": "primary",
  "SciDev": "primary",
  "Awaiting_Feedback": "success",
  "Queued": "success",
  "Internal": "warning",
  "External": "warning",
  "Non-rechargeable": "danger",
  "Pre-paid": "danger",
  "Rechargeable": "danger",
  "Open": "info",
  "Close": "dark"
}
```

## 1.0.13
- The first public release
- Support "removed time spent' tag

## 1.0.12
- Disable automatic refresh
- Refresh button enabled when the exception happens

## 1.0.11
- Refresh call at a time policy applied

## 1.0.10
- Bug fixed for calling typescript function

## 1.0.9
- Minor update as a new member has joined in the team

## 1.0.8
- Small fixes based on [@IanHenry](https://github.com/IanHenry)'s comments

## 1.0.7
- Export button is added
- Opening link is written by the given URL from the project detail

## 1.0.6
- More consistent handling for date-range
- If not authorized, the label list becomes diabled

## 1.0.5
- Add more projects with comma (Thanks to [@lhersemann](https://github.com/lhersemann))

## 1.0.4
- Add open/close tags for issues
- Person based view for specific user
- Collect project description tags in title

## 1.0.3
- Add quarter based time ranges in predefined links
- Use Project name instead of project id

## 1.0.2
- Support person based table

## 1.0.1
- Pie chart is added for project overview
- The first version of gtt
