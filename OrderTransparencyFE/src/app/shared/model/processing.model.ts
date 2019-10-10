export interface IProcessing {
  stepNr: number;
  name: string;
  date: string;
  commentDTAG: string;
}

export class ProcessingImpl implements IProcessing {
  stepNr: number;
  name: string;
  date: string;
  commentDTAG: string;

  constructor(stepNr: number, name: string, date: string, comment: string) {
    this.stepNr = stepNr;
    this.name = name;
    this.date = date;
    this.commentDTAG = comment;
  }

  getStepNr() {
    return this.stepNr;
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.date;
  }

  getCommentDTAG() {
    return this.commentDTAG;
  }
}
