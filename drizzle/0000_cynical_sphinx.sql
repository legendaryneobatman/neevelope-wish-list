CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"path" varchar(255) NOT NULL,
	"url" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "goods" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"created_at" date DEFAULT now() NOT NULL,
	"updated_at" date DEFAULT (CURRENT_DATE),
	"personal_info_id" integer
);
--> statement-breakpoint
CREATE TABLE "subcategories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"path" varchar(255) NOT NULL,
	"url" varchar(255),
	"categoryId" integer
);
--> statement-breakpoint
CREATE TABLE "personal-info" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"firstName" varchar(255),
	"lastName" varchar(255),
	"middleName" varchar(255),
	"birthDate" date,
	"avatarFileName" text
);
--> statement-breakpoint
ALTER TABLE "personal-info" ADD CONSTRAINT "personal-info_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;