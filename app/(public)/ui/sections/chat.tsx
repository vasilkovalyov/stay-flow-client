import { FileTextIcon, ImageIcon, XIcon } from 'lucide-react';

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  Avatar,
  AvatarFallback,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@/components/ui';

export function ChatSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Message</h3>
        <MessageGroup className="max-w-[504px]">
          <Message>
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>Assistant</MessageHeader>
              <div className="w-fit rounded-xl bg-muted px-[14px] py-[8px]">
                Hi! How can I help with your reservation today?
              </div>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <div className="w-fit self-end rounded-xl bg-primary px-[14px] py-[8px] text-primary-foreground">
                I&apos;d like to move my check-in to 3 PM.
              </div>
              <MessageFooter>Sent just now</MessageFooter>
            </MessageContent>
          </Message>
        </MessageGroup>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Attachment</h3>
        <AttachmentGroup className="max-w-[504px]">
          <Attachment state="done">
            <AttachmentMedia variant="icon">
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Booking-confirmation.pdf</AttachmentTitle>
              <AttachmentDescription>212 KB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove attachment">
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
          <Attachment state="uploading">
            <AttachmentMedia variant="icon">
              <ImageIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>room-photo.jpg</AttachmentTitle>
              <AttachmentDescription>Uploading…</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="error">
            <AttachmentMedia variant="icon">
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>invoice.docx</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </div>
    </div>
  );
}
